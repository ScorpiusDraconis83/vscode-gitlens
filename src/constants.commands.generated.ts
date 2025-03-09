// This file is generated by (vscode-gitlens)/scripts/generateCommandTypes.mts
// Do not edit this file directly

export type ContributedCommands =
	| ContributedKeybindingCommands
	| ContributedPaletteCommands
	| 'gitlens.annotations.nextChange'
	| 'gitlens.annotations.previousChange'
	| 'gitlens.computingFileAnnotations'
	| 'gitlens.copyDeepLinkToBranch'
	| 'gitlens.copyDeepLinkToCommit'
	| 'gitlens.copyDeepLinkToComparison'
	| 'gitlens.copyDeepLinkToFile'
	| 'gitlens.copyDeepLinkToFileAtRevision'
	| 'gitlens.copyDeepLinkToLines'
	| 'gitlens.copyDeepLinkToTag'
	| 'gitlens.copyDeepLinkToWorkspace'
	| 'gitlens.copyRemoteBranchUrl'
	| 'gitlens.copyRemoteBranchesUrl'
	| 'gitlens.copyRemoteComparisonUrl'
	| 'gitlens.copyRemoteFileUrlWithoutRange'
	| 'gitlens.copyRemotePullRequestUrl'
	| 'gitlens.copyRemoteRepositoryUrl'
	| 'gitlens.diffWithWorkingInDiffLeft'
	| 'gitlens.diffWithWorkingInDiffRight'
	| 'gitlens.ghpr.views.openOrCreateWorktree'
	| 'gitlens.graph.addAuthor'
	| 'gitlens.graph.associateIssueWithBranch'
	| 'gitlens.graph.cherryPick'
	| 'gitlens.graph.cherryPick.multi'
	| 'gitlens.graph.columnAuthorOff'
	| 'gitlens.graph.columnAuthorOn'
	| 'gitlens.graph.columnChangesOff'
	| 'gitlens.graph.columnChangesOn'
	| 'gitlens.graph.columnDateTimeOff'
	| 'gitlens.graph.columnDateTimeOn'
	| 'gitlens.graph.columnGraphCompact'
	| 'gitlens.graph.columnGraphDefault'
	| 'gitlens.graph.columnGraphOff'
	| 'gitlens.graph.columnGraphOn'
	| 'gitlens.graph.columnMessageOff'
	| 'gitlens.graph.columnMessageOn'
	| 'gitlens.graph.columnRefOff'
	| 'gitlens.graph.columnRefOn'
	| 'gitlens.graph.columnShaOff'
	| 'gitlens.graph.columnShaOn'
	| 'gitlens.graph.commitViaSCM'
	| 'gitlens.graph.compareAncestryWithWorking'
	| 'gitlens.graph.compareBranchWithHead'
	| 'gitlens.graph.compareSelectedCommits.multi'
	| 'gitlens.graph.compareWithHead'
	| 'gitlens.graph.compareWithMergeBase'
	| 'gitlens.graph.compareWithUpstream'
	| 'gitlens.graph.compareWithWorking'
	| 'gitlens.graph.copy'
	| 'gitlens.graph.copyDeepLinkToBranch'
	| 'gitlens.graph.copyDeepLinkToCommit'
	| 'gitlens.graph.copyDeepLinkToRepo'
	| 'gitlens.graph.copyDeepLinkToTag'
	| 'gitlens.graph.copyMessage'
	| 'gitlens.graph.copyRemoteBranchUrl'
	| 'gitlens.graph.copyRemoteCommitUrl'
	| 'gitlens.graph.copyRemoteCommitUrl.multi'
	| 'gitlens.graph.copySha'
	| 'gitlens.graph.copyWorkingChangesToWorktree'
	| 'gitlens.graph.createBranch'
	| 'gitlens.graph.createCloudPatch'
	| 'gitlens.graph.createPatch'
	| 'gitlens.graph.createPullRequest'
	| 'gitlens.graph.createTag'
	| 'gitlens.graph.createWorktree'
	| 'gitlens.graph.deleteBranch'
	| 'gitlens.graph.deleteTag'
	| 'gitlens.graph.fetch'
	| 'gitlens.graph.generateCommitMessage'
	| 'gitlens.graph.hideLocalBranch'
	| 'gitlens.graph.hideRefGroup'
	| 'gitlens.graph.hideRemote'
	| 'gitlens.graph.hideRemoteBranch'
	| 'gitlens.graph.hideTag'
	| 'gitlens.graph.mergeBranchInto'
	| 'gitlens.graph.openBranchOnRemote'
	| 'gitlens.graph.openChangedFileDiffs'
	| 'gitlens.graph.openChangedFileDiffsIndividually'
	| 'gitlens.graph.openChangedFileDiffsWithMergeBase'
	| 'gitlens.graph.openChangedFileDiffsWithWorking'
	| 'gitlens.graph.openChangedFileDiffsWithWorkingIndividually'
	| 'gitlens.graph.openChangedFileRevisions'
	| 'gitlens.graph.openChangedFiles'
	| 'gitlens.graph.openCommitOnRemote'
	| 'gitlens.graph.openCommitOnRemote.multi'
	| 'gitlens.graph.openInWorktree'
	| 'gitlens.graph.openOnlyChangedFiles'
	| 'gitlens.graph.openPullRequest'
	| 'gitlens.graph.openPullRequestChanges'
	| 'gitlens.graph.openPullRequestComparison'
	| 'gitlens.graph.openPullRequestOnRemote'
	| 'gitlens.graph.openWorktree'
	| 'gitlens.graph.openWorktreeInNewWindow'
	| 'gitlens.graph.publishBranch'
	| 'gitlens.graph.pull'
	| 'gitlens.graph.push'
	| 'gitlens.graph.pushWithForce'
	| 'gitlens.graph.rebaseOntoBranch'
	| 'gitlens.graph.rebaseOntoCommit'
	| 'gitlens.graph.rebaseOntoUpstream'
	| 'gitlens.graph.refresh'
	| 'gitlens.graph.renameBranch'
	| 'gitlens.graph.resetColumnsCompact'
	| 'gitlens.graph.resetColumnsDefault'
	| 'gitlens.graph.resetCommit'
	| 'gitlens.graph.resetToCommit'
	| 'gitlens.graph.resetToTag'
	| 'gitlens.graph.resetToTip'
	| 'gitlens.graph.revert'
	| 'gitlens.graph.scrollMarkerLocalBranchOff'
	| 'gitlens.graph.scrollMarkerLocalBranchOn'
	| 'gitlens.graph.scrollMarkerPullRequestOff'
	| 'gitlens.graph.scrollMarkerPullRequestOn'
	| 'gitlens.graph.scrollMarkerRemoteBranchOff'
	| 'gitlens.graph.scrollMarkerRemoteBranchOn'
	| 'gitlens.graph.scrollMarkerStashOff'
	| 'gitlens.graph.scrollMarkerStashOn'
	| 'gitlens.graph.scrollMarkerTagOff'
	| 'gitlens.graph.scrollMarkerTagOn'
	| 'gitlens.graph.shareAsCloudPatch'
	| 'gitlens.graph.showInDetailsView'
	| 'gitlens.graph.stash.apply'
	| 'gitlens.graph.stash.delete'
	| 'gitlens.graph.stash.rename'
	| 'gitlens.graph.stash.save'
	| 'gitlens.graph.switchToAnotherBranch'
	| 'gitlens.graph.switchToBranch'
	| 'gitlens.graph.switchToCommit'
	| 'gitlens.graph.switchToTag'
	| 'gitlens.graph.undoCommit'
	| 'gitlens.inviteToLiveShare'
	| 'gitlens.openCloudPatch'
	| 'gitlens.openComparisonOnRemote'
	| 'gitlens.openFolderHistory'
	| 'gitlens.openPullRequestOnRemote'
	| 'gitlens.openRevisionFileInDiffLeft'
	| 'gitlens.openRevisionFileInDiffRight'
	| 'gitlens.openWorkingFileInDiffLeft'
	| 'gitlens.openWorkingFileInDiffRight'
	| 'gitlens.plus.cloudIntegrations.connect'
	| 'gitlens.scm.generateCommitMessage'
	| 'gitlens.showFolderInTimeline'
	| 'gitlens.showInCommitGraph'
	| 'gitlens.showInCommitGraphView'
	| 'gitlens.showInDetailsView'
	| 'gitlens.showQuickCommitDetails'
	| 'gitlens.showQuickRevisionDetailsInDiffLeft'
	| 'gitlens.showQuickRevisionDetailsInDiffRight'
	| 'gitlens.showSettingsPage!branches-view'
	| 'gitlens.showSettingsPage!commit-graph'
	| 'gitlens.showSettingsPage!commits-view'
	| 'gitlens.showSettingsPage!contributors-view'
	| 'gitlens.showSettingsPage!file-annotations'
	| 'gitlens.showSettingsPage!file-history-view'
	| 'gitlens.showSettingsPage!line-history-view'
	| 'gitlens.showSettingsPage!remotes-view'
	| 'gitlens.showSettingsPage!repositories-view'
	| 'gitlens.showSettingsPage!search-compare-view'
	| 'gitlens.showSettingsPage!stashes-view'
	| 'gitlens.showSettingsPage!tags-view'
	| 'gitlens.showSettingsPage!views'
	| 'gitlens.showSettingsPage!worktrees-view'
	| 'gitlens.stashSaveFiles'
	| 'gitlens.timeline.refresh'
	| 'gitlens.toggleFileBlameInDiffLeft'
	| 'gitlens.toggleFileBlameInDiffRight'
	| 'gitlens.toggleFileChangesOnly'
	| 'gitlens.toggleFileHeatmapInDiffLeft'
	| 'gitlens.toggleFileHeatmapInDiffRight'
	| 'gitlens.views.abortPausedOperation'
	| 'gitlens.views.addAuthor'
	| 'gitlens.views.addAuthor.multi'
	| 'gitlens.views.addAuthors'
	| 'gitlens.views.addPullRequestRemote'
	| 'gitlens.views.addRemote'
	| 'gitlens.views.applyChanges'
	| 'gitlens.views.associateIssueWithBranch'
	| 'gitlens.views.branches.copy'
	| 'gitlens.views.branches.refresh'
	| 'gitlens.views.branches.regroup'
	| 'gitlens.views.branches.setFilesLayoutToAuto'
	| 'gitlens.views.branches.setFilesLayoutToList'
	| 'gitlens.views.branches.setFilesLayoutToTree'
	| 'gitlens.views.branches.setLayoutToList'
	| 'gitlens.views.branches.setLayoutToTree'
	| 'gitlens.views.branches.setShowAvatarsOff'
	| 'gitlens.views.branches.setShowAvatarsOn'
	| 'gitlens.views.branches.setShowBranchComparisonOff'
	| 'gitlens.views.branches.setShowBranchComparisonOn'
	| 'gitlens.views.branches.setShowBranchPullRequestOff'
	| 'gitlens.views.branches.setShowBranchPullRequestOn'
	| 'gitlens.views.branches.setShowRemoteBranchesOff'
	| 'gitlens.views.branches.setShowRemoteBranchesOn'
	| 'gitlens.views.branches.setShowStashesOff'
	| 'gitlens.views.branches.setShowStashesOn'
	| 'gitlens.views.branches.viewOptionsTitle'
	| 'gitlens.views.browseRepoAtRevision'
	| 'gitlens.views.browseRepoAtRevisionInNewWindow'
	| 'gitlens.views.browseRepoBeforeRevision'
	| 'gitlens.views.browseRepoBeforeRevisionInNewWindow'
	| 'gitlens.views.cherryPick'
	| 'gitlens.views.cherryPick.multi'
	| 'gitlens.views.clearComparison'
	| 'gitlens.views.clearReviewed'
	| 'gitlens.views.closeRepository'
	| 'gitlens.views.collapseNode'
	| 'gitlens.views.commitDetails.refresh'
	| 'gitlens.views.commits.copy'
	| 'gitlens.views.commits.refresh'
	| 'gitlens.views.commits.regroup'
	| 'gitlens.views.commits.setCommitsFilterAuthors'
	| 'gitlens.views.commits.setCommitsFilterOff'
	| 'gitlens.views.commits.setFilesLayoutToAuto'
	| 'gitlens.views.commits.setFilesLayoutToList'
	| 'gitlens.views.commits.setFilesLayoutToTree'
	| 'gitlens.views.commits.setShowAvatarsOff'
	| 'gitlens.views.commits.setShowAvatarsOn'
	| 'gitlens.views.commits.setShowBranchComparisonOff'
	| 'gitlens.views.commits.setShowBranchComparisonOn'
	| 'gitlens.views.commits.setShowBranchPullRequestOff'
	| 'gitlens.views.commits.setShowBranchPullRequestOn'
	| 'gitlens.views.commits.setShowMergeCommitsOff'
	| 'gitlens.views.commits.setShowMergeCommitsOn'
	| 'gitlens.views.commits.setShowStashesOff'
	| 'gitlens.views.commits.setShowStashesOn'
	| 'gitlens.views.commits.viewOptionsTitle'
	| 'gitlens.views.compareAncestryWithWorking'
	| 'gitlens.views.compareBranchWithHead'
	| 'gitlens.views.compareFileWithSelected'
	| 'gitlens.views.compareWithHead'
	| 'gitlens.views.compareWithMergeBase'
	| 'gitlens.views.compareWithSelected'
	| 'gitlens.views.compareWithUpstream'
	| 'gitlens.views.compareWithWorking'
	| 'gitlens.views.continuePausedOperation'
	| 'gitlens.views.contributors.copy'
	| 'gitlens.views.contributors.refresh'
	| 'gitlens.views.contributors.regroup'
	| 'gitlens.views.contributors.setFilesLayoutToAuto'
	| 'gitlens.views.contributors.setFilesLayoutToList'
	| 'gitlens.views.contributors.setFilesLayoutToTree'
	| 'gitlens.views.contributors.setShowAllBranchesOff'
	| 'gitlens.views.contributors.setShowAllBranchesOn'
	| 'gitlens.views.contributors.setShowAvatarsOff'
	| 'gitlens.views.contributors.setShowAvatarsOn'
	| 'gitlens.views.contributors.setShowMergeCommitsOff'
	| 'gitlens.views.contributors.setShowMergeCommitsOn'
	| 'gitlens.views.contributors.setShowStatisticsOff'
	| 'gitlens.views.contributors.setShowStatisticsOn'
	| 'gitlens.views.contributors.viewOptionsTitle'
	| 'gitlens.views.copy'
	| 'gitlens.views.copyAsMarkdown'
	| 'gitlens.views.copyRemoteCommitUrl'
	| 'gitlens.views.copyRemoteCommitUrl.multi'
	| 'gitlens.views.copyUrl'
	| 'gitlens.views.copyUrl.multi'
	| 'gitlens.views.createBranch'
	| 'gitlens.views.createPullRequest'
	| 'gitlens.views.createTag'
	| 'gitlens.views.createWorktree'
	| 'gitlens.views.deleteBranch'
	| 'gitlens.views.deleteBranch.multi'
	| 'gitlens.views.deleteTag'
	| 'gitlens.views.deleteTag.multi'
	| 'gitlens.views.deleteWorktree'
	| 'gitlens.views.deleteWorktree.multi'
	| 'gitlens.views.dismissNode'
	| 'gitlens.views.draft.open'
	| 'gitlens.views.draft.openOnWeb'
	| 'gitlens.views.drafts.copy'
	| 'gitlens.views.drafts.create'
	| 'gitlens.views.drafts.delete'
	| 'gitlens.views.drafts.info'
	| 'gitlens.views.drafts.refresh'
	| 'gitlens.views.drafts.setShowAvatarsOff'
	| 'gitlens.views.drafts.setShowAvatarsOn'
	| 'gitlens.views.editNode'
	| 'gitlens.views.expandNode'
	| 'gitlens.views.fetch'
	| 'gitlens.views.fileHistory.changeBase'
	| 'gitlens.views.fileHistory.copy'
	| 'gitlens.views.fileHistory.refresh'
	| 'gitlens.views.fileHistory.setCursorFollowingOff'
	| 'gitlens.views.fileHistory.setCursorFollowingOn'
	| 'gitlens.views.fileHistory.setEditorFollowingOff'
	| 'gitlens.views.fileHistory.setEditorFollowingOn'
	| 'gitlens.views.fileHistory.setRenameFollowingOff'
	| 'gitlens.views.fileHistory.setRenameFollowingOn'
	| 'gitlens.views.fileHistory.setShowAllBranchesOff'
	| 'gitlens.views.fileHistory.setShowAllBranchesOn'
	| 'gitlens.views.fileHistory.setShowAvatarsOff'
	| 'gitlens.views.fileHistory.setShowAvatarsOn'
	| 'gitlens.views.fileHistory.setShowMergeCommitsOff'
	| 'gitlens.views.fileHistory.setShowMergeCommitsOn'
	| 'gitlens.views.generateChangelog'
	| 'gitlens.views.graph.openInTab'
	| 'gitlens.views.graph.refresh'
	| 'gitlens.views.graphDetails.refresh'
	| 'gitlens.views.highlightChanges'
	| 'gitlens.views.highlightRevisionChanges'
	| 'gitlens.views.home.disablePreview'
	| 'gitlens.views.home.discussions'
	| 'gitlens.views.home.enablePreview'
	| 'gitlens.views.home.help'
	| 'gitlens.views.home.info'
	| 'gitlens.views.home.issues'
	| 'gitlens.views.home.previewFeedback'
	| 'gitlens.views.home.refresh'
	| 'gitlens.views.home.whatsNew'
	| 'gitlens.views.launchpad.copy'
	| 'gitlens.views.launchpad.info'
	| 'gitlens.views.launchpad.refresh'
	| 'gitlens.views.launchpad.regroup'
	| 'gitlens.views.launchpad.setFilesLayoutToAuto'
	| 'gitlens.views.launchpad.setFilesLayoutToList'
	| 'gitlens.views.launchpad.setFilesLayoutToTree'
	| 'gitlens.views.launchpad.setShowAvatarsOff'
	| 'gitlens.views.launchpad.setShowAvatarsOn'
	| 'gitlens.views.launchpad.viewOptionsTitle'
	| 'gitlens.views.lineHistory.changeBase'
	| 'gitlens.views.lineHistory.copy'
	| 'gitlens.views.lineHistory.refresh'
	| 'gitlens.views.lineHistory.setEditorFollowingOff'
	| 'gitlens.views.lineHistory.setEditorFollowingOn'
	| 'gitlens.views.lineHistory.setShowAvatarsOff'
	| 'gitlens.views.lineHistory.setShowAvatarsOn'
	| 'gitlens.views.loadAllChildren'
	| 'gitlens.views.loadMoreChildren'
	| 'gitlens.views.mergeBranchInto'
	| 'gitlens.views.openBranchOnRemote'
	| 'gitlens.views.openBranchOnRemote.multi'
	| 'gitlens.views.openChangedFileDiffs'
	| 'gitlens.views.openChangedFileDiffsIndividually'
	| 'gitlens.views.openChangedFileDiffsWithMergeBase'
	| 'gitlens.views.openChangedFileDiffsWithWorking'
	| 'gitlens.views.openChangedFileDiffsWithWorkingIndividually'
	| 'gitlens.views.openChangedFileRevisions'
	| 'gitlens.views.openChangedFiles'
	| 'gitlens.views.openChanges'
	| 'gitlens.views.openChangesWithMergeBase'
	| 'gitlens.views.openChangesWithWorking'
	| 'gitlens.views.openCommitOnRemote'
	| 'gitlens.views.openCommitOnRemote.multi'
	| 'gitlens.views.openDirectoryDiff'
	| 'gitlens.views.openDirectoryDiffWithWorking'
	| 'gitlens.views.openFile'
	| 'gitlens.views.openFileRevision'
	| 'gitlens.views.openInIntegratedTerminal'
	| 'gitlens.views.openInTerminal'
	| 'gitlens.views.openInWorktree'
	| 'gitlens.views.openOnlyChangedFiles'
	| 'gitlens.views.openPausedOperationInRebaseEditor'
	| 'gitlens.views.openPreviousChangesWithWorking'
	| 'gitlens.views.openPullRequest'
	| 'gitlens.views.openPullRequestChanges'
	| 'gitlens.views.openPullRequestComparison'
	| 'gitlens.views.openUrl'
	| 'gitlens.views.openUrl.multi'
	| 'gitlens.views.openWorktree'
	| 'gitlens.views.openWorktreeInNewWindow'
	| 'gitlens.views.openWorktreeInNewWindow.multi'
	| 'gitlens.views.patchDetails.close'
	| 'gitlens.views.patchDetails.refresh'
	| 'gitlens.views.pruneRemote'
	| 'gitlens.views.publishBranch'
	| 'gitlens.views.publishRepository'
	| 'gitlens.views.pull'
	| 'gitlens.views.pullRequest.close'
	| 'gitlens.views.pullRequest.copy'
	| 'gitlens.views.pullRequest.refresh'
	| 'gitlens.views.pullRequest.setFilesLayoutToAuto'
	| 'gitlens.views.pullRequest.setFilesLayoutToList'
	| 'gitlens.views.pullRequest.setFilesLayoutToTree'
	| 'gitlens.views.pullRequest.setShowAvatarsOff'
	| 'gitlens.views.pullRequest.setShowAvatarsOn'
	| 'gitlens.views.push'
	| 'gitlens.views.pushToCommit'
	| 'gitlens.views.pushWithForce'
	| 'gitlens.views.rebaseOntoBranch'
	| 'gitlens.views.rebaseOntoCommit'
	| 'gitlens.views.rebaseOntoUpstream'
	| 'gitlens.views.refreshNode'
	| 'gitlens.views.remotes.copy'
	| 'gitlens.views.remotes.refresh'
	| 'gitlens.views.remotes.regroup'
	| 'gitlens.views.remotes.setFilesLayoutToAuto'
	| 'gitlens.views.remotes.setFilesLayoutToList'
	| 'gitlens.views.remotes.setFilesLayoutToTree'
	| 'gitlens.views.remotes.setLayoutToList'
	| 'gitlens.views.remotes.setLayoutToTree'
	| 'gitlens.views.remotes.setShowAvatarsOff'
	| 'gitlens.views.remotes.setShowAvatarsOn'
	| 'gitlens.views.remotes.setShowBranchPullRequestOff'
	| 'gitlens.views.remotes.setShowBranchPullRequestOn'
	| 'gitlens.views.remotes.viewOptionsTitle'
	| 'gitlens.views.removeRemote'
	| 'gitlens.views.renameBranch'
	| 'gitlens.views.repositories.copy'
	| 'gitlens.views.repositories.refresh'
	| 'gitlens.views.repositories.regroup'
	| 'gitlens.views.repositories.setAutoRefreshToOff'
	| 'gitlens.views.repositories.setAutoRefreshToOn'
	| 'gitlens.views.repositories.setBranchesLayoutToList'
	| 'gitlens.views.repositories.setBranchesLayoutToTree'
	| 'gitlens.views.repositories.setBranchesShowBranchComparisonOff'
	| 'gitlens.views.repositories.setBranchesShowBranchComparisonOn'
	| 'gitlens.views.repositories.setFilesLayoutToAuto'
	| 'gitlens.views.repositories.setFilesLayoutToList'
	| 'gitlens.views.repositories.setFilesLayoutToTree'
	| 'gitlens.views.repositories.setShowAvatarsOff'
	| 'gitlens.views.repositories.setShowAvatarsOn'
	| 'gitlens.views.repositories.setShowBranchComparisonOff'
	| 'gitlens.views.repositories.setShowBranchComparisonOn'
	| 'gitlens.views.repositories.setShowBranchesOff'
	| 'gitlens.views.repositories.setShowBranchesOn'
	| 'gitlens.views.repositories.setShowCommitsOff'
	| 'gitlens.views.repositories.setShowCommitsOn'
	| 'gitlens.views.repositories.setShowContributorsOff'
	| 'gitlens.views.repositories.setShowContributorsOn'
	| 'gitlens.views.repositories.setShowRemotesOff'
	| 'gitlens.views.repositories.setShowRemotesOn'
	| 'gitlens.views.repositories.setShowSectionOff'
	| 'gitlens.views.repositories.setShowStashesOff'
	| 'gitlens.views.repositories.setShowStashesOn'
	| 'gitlens.views.repositories.setShowTagsOff'
	| 'gitlens.views.repositories.setShowTagsOn'
	| 'gitlens.views.repositories.setShowUpstreamStatusOff'
	| 'gitlens.views.repositories.setShowUpstreamStatusOn'
	| 'gitlens.views.repositories.setShowWorktreesOff'
	| 'gitlens.views.repositories.setShowWorktreesOn'
	| 'gitlens.views.repositories.viewOptionsTitle'
	| 'gitlens.views.resetCommit'
	| 'gitlens.views.resetToCommit'
	| 'gitlens.views.resetToTip'
	| 'gitlens.views.restore'
	| 'gitlens.views.revealRepositoryInExplorer'
	| 'gitlens.views.revealWorktreeInExplorer'
	| 'gitlens.views.revert'
	| 'gitlens.views.scm.grouped.branches'
	| 'gitlens.views.scm.grouped.branches.detach'
	| 'gitlens.views.scm.grouped.branches.regroup'
	| 'gitlens.views.scm.grouped.branches.setAsDefault'
	| 'gitlens.views.scm.grouped.branches.visibility.hide'
	| 'gitlens.views.scm.grouped.branches.visibility.show'
	| 'gitlens.views.scm.grouped.commits'
	| 'gitlens.views.scm.grouped.commits.detach'
	| 'gitlens.views.scm.grouped.commits.regroup'
	| 'gitlens.views.scm.grouped.commits.setAsDefault'
	| 'gitlens.views.scm.grouped.commits.visibility.hide'
	| 'gitlens.views.scm.grouped.commits.visibility.show'
	| 'gitlens.views.scm.grouped.contributors'
	| 'gitlens.views.scm.grouped.contributors.detach'
	| 'gitlens.views.scm.grouped.contributors.regroup'
	| 'gitlens.views.scm.grouped.contributors.setAsDefault'
	| 'gitlens.views.scm.grouped.contributors.visibility.hide'
	| 'gitlens.views.scm.grouped.contributors.visibility.show'
	| 'gitlens.views.scm.grouped.detachAll'
	| 'gitlens.views.scm.grouped.launchpad'
	| 'gitlens.views.scm.grouped.launchpad.detach'
	| 'gitlens.views.scm.grouped.launchpad.regroup'
	| 'gitlens.views.scm.grouped.launchpad.setAsDefault'
	| 'gitlens.views.scm.grouped.launchpad.visibility.hide'
	| 'gitlens.views.scm.grouped.launchpad.visibility.show'
	| 'gitlens.views.scm.grouped.refresh'
	| 'gitlens.views.scm.grouped.regroupAll'
	| 'gitlens.views.scm.grouped.remotes'
	| 'gitlens.views.scm.grouped.remotes.detach'
	| 'gitlens.views.scm.grouped.remotes.regroup'
	| 'gitlens.views.scm.grouped.remotes.setAsDefault'
	| 'gitlens.views.scm.grouped.remotes.visibility.hide'
	| 'gitlens.views.scm.grouped.remotes.visibility.show'
	| 'gitlens.views.scm.grouped.repositories'
	| 'gitlens.views.scm.grouped.repositories.detach'
	| 'gitlens.views.scm.grouped.repositories.regroup'
	| 'gitlens.views.scm.grouped.repositories.setAsDefault'
	| 'gitlens.views.scm.grouped.repositories.visibility.hide'
	| 'gitlens.views.scm.grouped.repositories.visibility.show'
	| 'gitlens.views.scm.grouped.searchAndCompare'
	| 'gitlens.views.scm.grouped.searchAndCompare.detach'
	| 'gitlens.views.scm.grouped.searchAndCompare.regroup'
	| 'gitlens.views.scm.grouped.searchAndCompare.setAsDefault'
	| 'gitlens.views.scm.grouped.searchAndCompare.visibility.hide'
	| 'gitlens.views.scm.grouped.searchAndCompare.visibility.show'
	| 'gitlens.views.scm.grouped.stashes'
	| 'gitlens.views.scm.grouped.stashes.detach'
	| 'gitlens.views.scm.grouped.stashes.regroup'
	| 'gitlens.views.scm.grouped.stashes.setAsDefault'
	| 'gitlens.views.scm.grouped.stashes.visibility.hide'
	| 'gitlens.views.scm.grouped.stashes.visibility.show'
	| 'gitlens.views.scm.grouped.tags'
	| 'gitlens.views.scm.grouped.tags.detach'
	| 'gitlens.views.scm.grouped.tags.regroup'
	| 'gitlens.views.scm.grouped.tags.setAsDefault'
	| 'gitlens.views.scm.grouped.tags.visibility.hide'
	| 'gitlens.views.scm.grouped.tags.visibility.show'
	| 'gitlens.views.scm.grouped.worktrees'
	| 'gitlens.views.scm.grouped.worktrees.detach'
	| 'gitlens.views.scm.grouped.worktrees.regroup'
	| 'gitlens.views.scm.grouped.worktrees.setAsDefault'
	| 'gitlens.views.scm.grouped.worktrees.visibility.hide'
	| 'gitlens.views.scm.grouped.worktrees.visibility.show'
	| 'gitlens.views.searchAndCompare.clear'
	| 'gitlens.views.searchAndCompare.copy'
	| 'gitlens.views.searchAndCompare.refresh'
	| 'gitlens.views.searchAndCompare.regroup'
	| 'gitlens.views.searchAndCompare.searchCommits'
	| 'gitlens.views.searchAndCompare.selectForCompare'
	| 'gitlens.views.searchAndCompare.setFilesLayoutToAuto'
	| 'gitlens.views.searchAndCompare.setFilesLayoutToList'
	| 'gitlens.views.searchAndCompare.setFilesLayoutToTree'
	| 'gitlens.views.searchAndCompare.setShowAvatarsOff'
	| 'gitlens.views.searchAndCompare.setShowAvatarsOn'
	| 'gitlens.views.searchAndCompare.swapComparison'
	| 'gitlens.views.searchAndCompare.viewOptionsTitle'
	| 'gitlens.views.selectFileForCompare'
	| 'gitlens.views.selectForCompare'
	| 'gitlens.views.setAsDefault'
	| 'gitlens.views.setBranchComparisonToBranch'
	| 'gitlens.views.setBranchComparisonToWorking'
	| 'gitlens.views.setContributorsStatisticsOff'
	| 'gitlens.views.setContributorsStatisticsOn'
	| 'gitlens.views.setResultsCommitsFilterAuthors'
	| 'gitlens.views.setResultsCommitsFilterOff'
	| 'gitlens.views.setResultsFilesFilterOff'
	| 'gitlens.views.setResultsFilesFilterOnLeft'
	| 'gitlens.views.setResultsFilesFilterOnRight'
	| 'gitlens.views.setShowRelativeDateMarkersOff'
	| 'gitlens.views.setShowRelativeDateMarkersOn'
	| 'gitlens.views.skipPausedOperation'
	| 'gitlens.views.stageDirectory'
	| 'gitlens.views.stageFile'
	| 'gitlens.views.star'
	| 'gitlens.views.star.multi'
	| 'gitlens.views.stash.apply'
	| 'gitlens.views.stash.delete'
	| 'gitlens.views.stash.delete.multi'
	| 'gitlens.views.stash.rename'
	| 'gitlens.views.stashes.copy'
	| 'gitlens.views.stashes.refresh'
	| 'gitlens.views.stashes.regroup'
	| 'gitlens.views.stashes.setFilesLayoutToAuto'
	| 'gitlens.views.stashes.setFilesLayoutToList'
	| 'gitlens.views.stashes.setFilesLayoutToTree'
	| 'gitlens.views.stashes.viewOptionsTitle'
	| 'gitlens.views.switchToAnotherBranch'
	| 'gitlens.views.switchToBranch'
	| 'gitlens.views.switchToCommit'
	| 'gitlens.views.switchToTag'
	| 'gitlens.views.tags.copy'
	| 'gitlens.views.tags.refresh'
	| 'gitlens.views.tags.regroup'
	| 'gitlens.views.tags.setFilesLayoutToAuto'
	| 'gitlens.views.tags.setFilesLayoutToList'
	| 'gitlens.views.tags.setFilesLayoutToTree'
	| 'gitlens.views.tags.setLayoutToList'
	| 'gitlens.views.tags.setLayoutToTree'
	| 'gitlens.views.tags.setShowAvatarsOff'
	| 'gitlens.views.tags.setShowAvatarsOn'
	| 'gitlens.views.tags.viewOptionsTitle'
	| 'gitlens.views.timeline.refresh'
	| 'gitlens.views.title.createBranch'
	| 'gitlens.views.title.createTag'
	| 'gitlens.views.title.createWorktree'
	| 'gitlens.views.undoCommit'
	| 'gitlens.views.unsetAsDefault'
	| 'gitlens.views.unstageDirectory'
	| 'gitlens.views.unstageFile'
	| 'gitlens.views.unstar'
	| 'gitlens.views.unstar.multi'
	| 'gitlens.views.workspaces.addRepos'
	| 'gitlens.views.workspaces.addReposFromLinked'
	| 'gitlens.views.workspaces.changeAutoAddSetting'
	| 'gitlens.views.workspaces.convert'
	| 'gitlens.views.workspaces.copy'
	| 'gitlens.views.workspaces.createLocal'
	| 'gitlens.views.workspaces.delete'
	| 'gitlens.views.workspaces.info'
	| 'gitlens.views.workspaces.locateAllRepos'
	| 'gitlens.views.workspaces.openLocal'
	| 'gitlens.views.workspaces.openLocalNewWindow'
	| 'gitlens.views.workspaces.refresh'
	| 'gitlens.views.workspaces.repo.addToWindow'
	| 'gitlens.views.workspaces.repo.locate'
	| 'gitlens.views.workspaces.repo.open'
	| 'gitlens.views.workspaces.repo.openInNewWindow'
	| 'gitlens.views.workspaces.repo.remove'
	| 'gitlens.views.worktrees.copy'
	| 'gitlens.views.worktrees.refresh'
	| 'gitlens.views.worktrees.regroup'
	| 'gitlens.views.worktrees.setFilesLayoutToAuto'
	| 'gitlens.views.worktrees.setFilesLayoutToList'
	| 'gitlens.views.worktrees.setFilesLayoutToTree'
	| 'gitlens.views.worktrees.setLayoutToList'
	| 'gitlens.views.worktrees.setLayoutToTree'
	| 'gitlens.views.worktrees.setShowAvatarsOff'
	| 'gitlens.views.worktrees.setShowAvatarsOn'
	| 'gitlens.views.worktrees.setShowBranchComparisonOff'
	| 'gitlens.views.worktrees.setShowBranchComparisonOn'
	| 'gitlens.views.worktrees.setShowBranchPullRequestOff'
	| 'gitlens.views.worktrees.setShowBranchPullRequestOn'
	| 'gitlens.views.worktrees.setShowStashesOff'
	| 'gitlens.views.worktrees.setShowStashesOn'
	| 'gitlens.views.worktrees.viewOptionsTitle';

export type ContributedPaletteCommands =
	| 'gitlens.addAuthors'
	| 'gitlens.applyPatchFromClipboard'
	| 'gitlens.associateIssueWithBranch'
	| 'gitlens.browseRepoAtRevision'
	| 'gitlens.browseRepoAtRevisionInNewWindow'
	| 'gitlens.browseRepoBeforeRevision'
	| 'gitlens.browseRepoBeforeRevisionInNewWindow'
	| 'gitlens.clearFileAnnotations'
	| 'gitlens.closeUnchangedFiles'
	| 'gitlens.compareHeadWith'
	| 'gitlens.compareWith'
	| 'gitlens.compareWorkingWith'
	| 'gitlens.connectRemoteProvider'
	| 'gitlens.copyCurrentBranch'
	| 'gitlens.copyDeepLinkToRepo'
	| 'gitlens.copyMessageToClipboard'
	| 'gitlens.copyPatchToClipboard'
	| 'gitlens.copyRelativePathToClipboard'
	| 'gitlens.copyRemoteCommitUrl'
	| 'gitlens.copyRemoteFileUrlFrom'
	| 'gitlens.copyRemoteFileUrlToClipboard'
	| 'gitlens.copyShaToClipboard'
	| 'gitlens.copyWorkingChangesToWorktree'
	| 'gitlens.createCloudPatch'
	| 'gitlens.createPatch'
	| 'gitlens.createPullRequestOnRemote'
	| 'gitlens.diffDirectory'
	| 'gitlens.diffDirectoryWithHead'
	| 'gitlens.diffFolderWithRevision'
	| 'gitlens.diffFolderWithRevisionFrom'
	| 'gitlens.diffLineWithPrevious'
	| 'gitlens.diffLineWithWorking'
	| 'gitlens.diffWithNext'
	| 'gitlens.diffWithNextInDiffLeft'
	| 'gitlens.diffWithNextInDiffRight'
	| 'gitlens.diffWithPrevious'
	| 'gitlens.diffWithPreviousInDiffLeft'
	| 'gitlens.diffWithPreviousInDiffRight'
	| 'gitlens.diffWithRevision'
	| 'gitlens.diffWithRevisionFrom'
	| 'gitlens.diffWithWorking'
	| 'gitlens.disableDebugLogging'
	| 'gitlens.disableRebaseEditor'
	| 'gitlens.disconnectRemoteProvider'
	| 'gitlens.enableDebugLogging'
	| 'gitlens.enableRebaseEditor'
	| 'gitlens.externalDiff'
	| 'gitlens.externalDiffAll'
	| 'gitlens.fetchRepositories'
	| 'gitlens.generateCommitMessage'
	| 'gitlens.getStarted'
	| 'gitlens.gitCommands'
	| 'gitlens.gitCommands.branch'
	| 'gitlens.gitCommands.branch.create'
	| 'gitlens.gitCommands.branch.delete'
	| 'gitlens.gitCommands.branch.prune'
	| 'gitlens.gitCommands.branch.rename'
	| 'gitlens.gitCommands.checkout'
	| 'gitlens.gitCommands.cherryPick'
	| 'gitlens.gitCommands.history'
	| 'gitlens.gitCommands.merge'
	| 'gitlens.gitCommands.rebase'
	| 'gitlens.gitCommands.remote'
	| 'gitlens.gitCommands.remote.add'
	| 'gitlens.gitCommands.remote.prune'
	| 'gitlens.gitCommands.remote.remove'
	| 'gitlens.gitCommands.reset'
	| 'gitlens.gitCommands.revert'
	| 'gitlens.gitCommands.show'
	| 'gitlens.gitCommands.stash'
	| 'gitlens.gitCommands.stash.drop'
	| 'gitlens.gitCommands.stash.list'
	| 'gitlens.gitCommands.stash.pop'
	| 'gitlens.gitCommands.stash.push'
	| 'gitlens.gitCommands.stash.rename'
	| 'gitlens.gitCommands.status'
	| 'gitlens.gitCommands.switch'
	| 'gitlens.gitCommands.tag'
	| 'gitlens.gitCommands.tag.create'
	| 'gitlens.gitCommands.tag.delete'
	| 'gitlens.gitCommands.worktree'
	| 'gitlens.gitCommands.worktree.create'
	| 'gitlens.gitCommands.worktree.delete'
	| 'gitlens.gitCommands.worktree.open'
	| 'gitlens.gk.switchOrganization'
	| 'gitlens.graph.split'
	| 'gitlens.graph.switchToEditorLayout'
	| 'gitlens.graph.switchToPanelLayout'
	| 'gitlens.launchpad.indicator.toggle'
	| 'gitlens.openAssociatedPullRequestOnRemote'
	| 'gitlens.openBlamePriorToChange'
	| 'gitlens.openBranchOnRemote'
	| 'gitlens.openBranchesOnRemote'
	| 'gitlens.openChangedFiles'
	| 'gitlens.openCommitOnRemote'
	| 'gitlens.openCurrentBranchOnRemote'
	| 'gitlens.openFileFromRemote'
	| 'gitlens.openFileHistory'
	| 'gitlens.openFileOnRemote'
	| 'gitlens.openFileOnRemoteFrom'
	| 'gitlens.openFileRevision'
	| 'gitlens.openFileRevisionFrom'
	| 'gitlens.openOnlyChangedFiles'
	| 'gitlens.openPatch'
	| 'gitlens.openRepoOnRemote'
	| 'gitlens.openRevisionFile'
	| 'gitlens.openWorkingFile'
	| 'gitlens.pastePatchFromClipboard'
	| 'gitlens.plus.cloudIntegrations.manage'
	| 'gitlens.plus.hide'
	| 'gitlens.plus.login'
	| 'gitlens.plus.logout'
	| 'gitlens.plus.manage'
	| 'gitlens.plus.reactivateProTrial'
	| 'gitlens.plus.refreshRepositoryAccess'
	| 'gitlens.plus.restore'
	| 'gitlens.plus.signUp'
	| 'gitlens.plus.simulateSubscription'
	| 'gitlens.plus.startPreviewTrial'
	| 'gitlens.plus.upgrade'
	| 'gitlens.pullRepositories'
	| 'gitlens.pushRepositories'
	| 'gitlens.quickOpenFileHistory'
	| 'gitlens.reset'
	| 'gitlens.resetAIKey'
	| 'gitlens.resetViewsLayout'
	| 'gitlens.revealCommitInView'
	| 'gitlens.shareAsCloudPatch'
	| 'gitlens.showAccountView'
	| 'gitlens.showBranchesView'
	| 'gitlens.showCommitDetailsView'
	| 'gitlens.showCommitInView'
	| 'gitlens.showCommitSearch'
	| 'gitlens.showCommitsInView'
	| 'gitlens.showCommitsView'
	| 'gitlens.showContributorsView'
	| 'gitlens.showDraftsView'
	| 'gitlens.showFileHistoryView'
	| 'gitlens.showFileInTimeline'
	| 'gitlens.showGraph'
	| 'gitlens.showGraphPage'
	| 'gitlens.showGraphView'
	| 'gitlens.showHomeView'
	| 'gitlens.showLastQuickPick'
	| 'gitlens.showLaunchpad'
	| 'gitlens.showLaunchpadView'
	| 'gitlens.showLineCommitInView'
	| 'gitlens.showLineHistoryView'
	| 'gitlens.showPatchDetailsPage'
	| 'gitlens.showQuickBranchHistory'
	| 'gitlens.showQuickCommitFileDetails'
	| 'gitlens.showQuickFileHistory'
	| 'gitlens.showQuickRepoHistory'
	| 'gitlens.showQuickRepoStatus'
	| 'gitlens.showQuickRevisionDetails'
	| 'gitlens.showQuickStashList'
	| 'gitlens.showRemotesView'
	| 'gitlens.showRepositoriesView'
	| 'gitlens.showSearchAndCompareView'
	| 'gitlens.showSettingsPage'
	| 'gitlens.showSettingsPage!autolinks'
	| 'gitlens.showStashesView'
	| 'gitlens.showTagsView'
	| 'gitlens.showTimelinePage'
	| 'gitlens.showTimelineView'
	| 'gitlens.showWorkspacesView'
	| 'gitlens.showWorktreesView'
	| 'gitlens.startWork'
	| 'gitlens.stashApply'
	| 'gitlens.stashSave'
	| 'gitlens.switchAIModel'
	| 'gitlens.switchMode'
	| 'gitlens.timeline.split'
	| 'gitlens.toggleCodeLens'
	| 'gitlens.toggleFileBlame'
	| 'gitlens.toggleFileChanges'
	| 'gitlens.toggleFileHeatmap'
	| 'gitlens.toggleGraph'
	| 'gitlens.toggleLineBlame'
	| 'gitlens.toggleMaximizedGraph'
	| 'gitlens.toggleReviewMode'
	| 'gitlens.toggleZenMode'
	| 'gitlens.views.workspaces.create';

export type ContributedKeybindingCommands =
	| 'gitlens.key.alt+,'
	| 'gitlens.key.alt+.'
	| 'gitlens.key.alt+enter'
	| 'gitlens.key.alt+left'
	| 'gitlens.key.alt+right'
	| 'gitlens.key.ctrl+enter'
	| 'gitlens.key.ctrl+left'
	| 'gitlens.key.ctrl+right'
	| 'gitlens.key.escape'
	| 'gitlens.key.left'
	| 'gitlens.key.right';
