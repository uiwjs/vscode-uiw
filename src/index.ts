// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { webviewPanel } from './utils/panel';

const openBrowsers = require('open-browsers');
// decide what os should be used
// possible node values 'darwin', 'freebsd', 'linux', 'sunos' or 'win32'
// const platform = process.platform;

const menu = require('./menu'); 

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {
	const uiwProvider = new menu.Menu(context);
	console.log('Congratulations, your extension "vscode-uiw" is now active!');

	context.subscriptions.push(vscode.window.createTreeView('uiw.view.ecosystem', { treeDataProvider: uiwProvider, showCollapseAll: true }));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Document', () => openBrowsers('https://uiwjs.github.io/')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.QuickStart', () => webviewPanel('QuickStart', context, 'src/routes/guide/quick-start')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.CreateReactApp', () => webviewPanel('CreateReactApp', context, 'src/routes/guide/create-react-app')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.KKT', () => webviewPanel('KKT', context, 'src/routes/guide/kkt')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Docs', () => webviewPanel('Write', context, 'src/routes/guide/docs')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.ThirdParty', () => webviewPanel('uiwThirdParty', context, 'src/routes/guide/recommendation')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Changelog', () => webviewPanel('uiwChangelog', context, 'src/routes/guide/changelog')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Color', () => webviewPanel('Color', context, 'src/routes/components/colors')));

	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Avatar', () => webviewPanel('Avatar', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Alert', () => webviewPanel('Alert', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Affix', () => webviewPanel('Affix', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Badge', () => webviewPanel('Badge', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.BackTop', () => webviewPanel('BackTop', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Button', () => webviewPanel('Button', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.ButtonGroup', () => webviewPanel('Button', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Breadcrumb', () => webviewPanel('Breadcrumb', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Card', () => webviewPanel('Card', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Col', () => webviewPanel('Col', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.CopyToClipboard', () => webviewPanel('CopyToClipboard', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Checkbox', () => webviewPanel('Checkbox', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Collapse', () => webviewPanel('Collapse', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Divider', () => webviewPanel('Divider', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Drawer', () => webviewPanel('Drawer', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Dropdown', () => webviewPanel('Dropdown', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.DatePicker', () => webviewPanel('DatePicker', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.DateInput', () => webviewPanel('DateInput', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Overlay', () => webviewPanel('Overlay', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.OverlayTrigger', () => webviewPanel('OverlayTrigger', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Icon', () => webviewPanel('Icon', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Input', () => webviewPanel('Input', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.List', () => webviewPanel('List', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Menu', () => webviewPanel('Menu', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Modal', () => webviewPanel('Modal', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Message', () => webviewPanel('Message', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.MonthPicker', () => webviewPanel('MonthPicker', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Notify', () => webviewPanel('Notify', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Popover', () => webviewPanel('Popover', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Progress', () => webviewPanel('Progress', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Portal', () => webviewPanel('Portal', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Row', () => webviewPanel('Row', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Rate', () => webviewPanel('Rate', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Radio', () => webviewPanel('Radio', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.RadioGroup', () => webviewPanel('Radio', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Select', () => webviewPanel('Select', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Switch', () => webviewPanel('Switch', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Steps', () => webviewPanel('Steps', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Split', () => webviewPanel('Split', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Tag', () => webviewPanel('Tag', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Tabs', () => webviewPanel('Tabs', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Table', () => webviewPanel('Table', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Tooltip', () => webviewPanel('Tooltip', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Timestamp', () => webviewPanel('Timestamp', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.TimePicker', () => webviewPanel('TimePicker', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Textarea', () => webviewPanel('Textarea', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Form', () => webviewPanel('Form', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.FileInput', () => webviewPanel('FileInput', context)));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.FormItem', () => webviewPanel('FormItem', context)));
}

// this method is called when your extension is deactivated
export function deactivate() {}