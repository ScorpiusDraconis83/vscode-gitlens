import type { AuthenticationSession, CancellationToken } from 'vscode';
import { md5 } from '@env/crypto';
import { SelfHostedIntegrationId } from '../../../constants.integrations';
import type { Container } from '../../../container';
import type { Account } from '../../../git/models/author';
import type { DefaultBranch } from '../../../git/models/defaultBranch';
import type { Issue, IssueShape } from '../../../git/models/issue';
import type { IssueOrPullRequest, IssueOrPullRequestType } from '../../../git/models/issueOrPullRequest';
import type { PullRequest, PullRequestMergeMethod, PullRequestState } from '../../../git/models/pullRequest';
import type { RepositoryMetadata } from '../../../git/models/repositoryMetadata';
import type { IntegrationAuthenticationProviderDescriptor } from '../authentication/integrationAuthenticationProvider';
import type { IntegrationAuthenticationService } from '../authentication/integrationAuthenticationService';
import type { ProviderAuthenticationSession } from '../authentication/models';
import { HostingIntegration } from '../integration';
import type { BitbucketRepositoryDescriptor } from './bitbucket/models';
import { fromProviderPullRequest, providersMetadata } from './models';
import type { ProvidersApi } from './providersApi';

const metadata = providersMetadata[SelfHostedIntegrationId.BitbucketServer];
const authProvider = Object.freeze({ id: metadata.id, scopes: metadata.scopes });

export class BitbucketServerIntegration extends HostingIntegration<
	SelfHostedIntegrationId.BitbucketServer,
	BitbucketRepositoryDescriptor
> {
	readonly authProvider: IntegrationAuthenticationProviderDescriptor = authProvider;
	readonly id = SelfHostedIntegrationId.BitbucketServer;
	protected readonly key =
		`${this.id}:${this.domain}` satisfies `${SelfHostedIntegrationId.BitbucketServer}:${string}`;
	readonly name: string = 'Bitbucket Data Center';

	constructor(
		container: Container,
		authenticationService: IntegrationAuthenticationService,
		getProvidersApi: () => Promise<ProvidersApi>,
		private readonly _domain: string,
	) {
		super(container, authenticationService, getProvidersApi);
	}

	get domain(): string {
		return this._domain;
	}

	protected get apiBaseUrl(): string {
		return `https://${this.domain}/rest/api/1.0`;
	}

	protected override async mergeProviderPullRequest(
		{ accessToken }: AuthenticationSession,
		pr: PullRequest,
		options?: {
			mergeMethod?: PullRequestMergeMethod;
		},
	): Promise<boolean> {
		const api = await this.getProvidersApi();
		return api.mergePullRequest(this.id, pr, {
			accessToken: accessToken,
			mergeMethod: options?.mergeMethod,
		});
	}

	protected override async getProviderAccountForCommit(
		_session: AuthenticationSession,
		_repo: BitbucketRepositoryDescriptor,
		_ref: string,
		_options?: {
			avatarSize?: number;
		},
	): Promise<Account | undefined> {
		return Promise.resolve(undefined);
	}

	protected override async getProviderAccountForEmail(
		_session: AuthenticationSession,
		_repo: BitbucketRepositoryDescriptor,
		_email: string,
		_options?: {
			avatarSize?: number;
		},
	): Promise<Account | undefined> {
		return Promise.resolve(undefined);
	}

	protected override async getProviderDefaultBranch(
		_session: AuthenticationSession,
		_repo: BitbucketRepositoryDescriptor,
	): Promise<DefaultBranch | undefined> {
		return Promise.resolve(undefined);
	}

	protected override async getProviderIssueOrPullRequest(
		{ accessToken }: AuthenticationSession,
		repo: BitbucketRepositoryDescriptor,
		id: string,
		type: undefined | IssueOrPullRequestType,
	): Promise<IssueOrPullRequest | undefined> {
		if (type !== 'pullrequest') {
			return undefined;
		}
		return (await this.container.bitbucket)?.getIssueOrPullRequest(
			this,
			accessToken,
			repo.owner,
			repo.name,
			id,
			this.apiBaseUrl,
			{
				type: 'pullrequest',
			},
		);
	}

	protected override async getProviderIssue(
		_session: AuthenticationSession,
		_repo: BitbucketRepositoryDescriptor,
		_id: string,
	): Promise<Issue | undefined> {
		return Promise.resolve(undefined);
	}

	protected override async getProviderPullRequestForBranch(
		_session: AuthenticationSession,
		_repo: BitbucketRepositoryDescriptor,
		_branch: string,
		_options?: {
			avatarSize?: number;
			include?: PullRequestState[];
		},
	): Promise<PullRequest | undefined> {
		return Promise.resolve(undefined);
	}

	protected override async getProviderPullRequestForCommit(
		_session: AuthenticationSession,
		_repo: BitbucketRepositoryDescriptor,
		_ref: string,
	): Promise<PullRequest | undefined> {
		return Promise.resolve(undefined);
	}

	protected override async getProviderRepositoryMetadata(
		_session: AuthenticationSession,
		_repo: BitbucketRepositoryDescriptor,
		_cancellation?: CancellationToken,
	): Promise<RepositoryMetadata | undefined> {
		return Promise.resolve(undefined);
	}

	private _accounts: Map<string, Account | undefined> | undefined;
	protected override async getProviderCurrentAccount({
		accessToken,
	}: AuthenticationSession): Promise<Account | undefined> {
		this._accounts ??= new Map<string, Account | undefined>();

		const cachedAccount = this._accounts.get(accessToken);
		if (cachedAccount == null) {
			const api = await this.getProvidersApi();
			const user = await api.getCurrentUser(this.id, { accessToken: accessToken, baseUrl: this.apiBaseUrl });
			this._accounts.set(
				accessToken,
				user
					? {
							provider: this,
							id: user.id,
							name: user.name ?? undefined,
							email: user.email ?? undefined,
							avatarUrl: user.avatarUrl ?? undefined,
							username: user.username ?? undefined,
					  }
					: undefined,
			);
		}

		return this._accounts.get(accessToken);
	}

	protected override async searchProviderMyPullRequests(
		session: ProviderAuthenticationSession,
		repos?: BitbucketRepositoryDescriptor[],
	): Promise<PullRequest[] | undefined> {
		if (repos != null) {
			// TODO: implement repos version
			return undefined;
		}

		const api = await this.getProvidersApi();
		const integration = await this.container.integrations.get(this.id);
		if (!api || !integration) {
			return undefined;
		}
		const prs = await api.getBitbucketServerPullRequestsForCurrentUser({ accessToken: session.accessToken });
		return prs?.map(pr => fromProviderPullRequest(pr, integration));
	}

	protected override async searchProviderMyIssues(
		_session: AuthenticationSession,
		_repos?: BitbucketRepositoryDescriptor[],
	): Promise<IssueShape[] | undefined> {
		return Promise.resolve(undefined);
	}

	private readonly storagePrefix = 'bitbucket-server';
	protected override async providerOnConnect(): Promise<void> {
		if (this._session == null) return;

		const accountStorageKey = md5(this._session.accessToken);

		const storedAccount = this.container.storage.get(`${this.storagePrefix}:${accountStorageKey}:account`);

		let account: Account | undefined = storedAccount?.data ? { ...storedAccount.data, provider: this } : undefined;

		if (storedAccount == null) {
			account = await this.getProviderCurrentAccount(this._session);
			if (account != null) {
				// Clear all other stored workspaces and repositories and accounts when our session changes
				await this.container.storage.deleteWithPrefix(this.storagePrefix);
				await this.container.storage.store(`${this.storagePrefix}:${accountStorageKey}:account`, {
					v: 1,
					timestamp: Date.now(),
					data: {
						id: account.id,
						name: account.name,
						email: account.email,
						avatarUrl: account.avatarUrl,
						username: account.username,
					},
				});
			}
		}
		this._accounts ??= new Map<string, Account | undefined>();
		this._accounts.set(this._session.accessToken, account);
	}

	protected override providerOnDisconnect(): void {
		this._accounts = undefined;
	}
}
