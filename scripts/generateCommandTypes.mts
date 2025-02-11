import { exec } from 'child_process';
import type { ContributionsJson } from './contributions/models';
import { readFileSync, writeFileSync } from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.join(path.dirname(__filename), '..');
const relativeFilename = path.relative(__dirname, __filename).replace(/\\/g, '/');

/** Generates command types from the commands in `contributions.json` */
function generateCommandTypesFromContributions(): void {
	console.log("Generating command types into 'constants.commands.generated.ts' from contributions.json...");

	const contributions: ContributionsJson = JSON.parse(
		readFileSync(path.join(__dirname, 'contributions.json'), 'utf8'),
	);

	const commands: string[] = [];
	const kbCommands: string[] = [];
	const paletteCommands: string[] = [];

	for (const [id, command] of Object.entries(contributions.commands)) {
		if (command.commandPalette) {
			paletteCommands.push(id);
		} else {
			commands.push(id);
		}
	}

	for (const kb of contributions.keybindings) {
		kbCommands.push(kb.command);
	}

	const contents = `// This file is generated by (vscode-gitlens)/${relativeFilename}
// Do not edit this file directly

export type ContributedCommands = ContributedKeybindingCommands | ContributedPaletteCommands | ${commands
		.sort()
		.map(c => `'${c}'`)
		.join(' | ')};

export type ContributedPaletteCommands = ${paletteCommands
		.sort()
		.map(c => `'${c}'`)
		.join(' | ')};

export type ContributedKeybindingCommands = ${kbCommands
		.filter(c => c.startsWith('gitlens.'))
		.sort()
		.map(c => `'${c}'`)
		.join(' | ')};

`;

	const file = path.join(__dirname, 'src', 'constants.commands.generated.ts');
	writeFileSync(file, contents, 'utf8');
	// run prettier on the generated file
	exec(`pnpm prettier --write ${file}`);

	console.log("Generated 'constants.commands.generated.ts' from contributions.json");
}

generateCommandTypesFromContributions();
