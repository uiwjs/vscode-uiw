// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { UIWDocumentPanel } from './utils/panel';
import { commandHelp } from './command';
import { Menu } from './menu';
import { ext } from './extensionVariables';

const openBrowsers = require('open-browsers');
// decide what os should be used
// possible node values 'darwin', 'freebsd', 'linux', 'sunos' or 'win32'
// const platform = process.platform;

// const menu = require('./menu'); 

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {
	// const uiwProvider = new menu.Menu(context);
	// console.log('Congratulations, your extension "vscode-uiw" is now active!');

	ext.Menu = new Menu();
	vscode.window.registerTreeDataProvider(
		'uiw.view.ecosystem',
		ext.Menu
	);
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.ecoRefreshNode', () => {
		console.log("刷新")
		vscode.window.registerTreeDataProvider(
			'uiw.view.ecosystem',
			ext.Menu
		);
	}));

	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.help', commandHelp));  //"uiw.cmd.help"命令注册
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.issue', () => openBrowsers('https://github.com/uiwjs/uiw/issues/new')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Document', () => openBrowsers('https://uiwjs.github.io/')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.github', () => openBrowsers('https://github.com/uiwjs/uiw')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.gitee', () => openBrowsers('https://gitee.com/uiw/uiw')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.QuickStart', () => UIWDocumentPanel.show(context.extensionUri, 'QuickStart', 'website/uiw/src/routes/guide/quick-start')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.CreateReactApp', () => UIWDocumentPanel.show(context.extensionUri, 'CreateReactApp', 'website/uiw/src/routes/guide/create-react-app')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Import', () => UIWDocumentPanel.show(context.extensionUri, 'Import', 'website/uiw/src/routes/guide/import')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Vscode', () => UIWDocumentPanel.show(context.extensionUri, 'VSCode Plugins', 'website/uiw/src/routes/guide/vscode')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Kkt', () => UIWDocumentPanel.show(context.extensionUri, 'KKT', 'website/uiw/src/routes/guide/kkt')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Docs', () => UIWDocumentPanel.show(context.extensionUri, 'Docs', 'website/uiw/src/routes/guide/docs')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Extensions', () => UIWDocumentPanel.show(context.extensionUri, 'Docs', 'website/uiw/src/routes/extensions')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Recommendation', () => UIWDocumentPanel.show(context.extensionUri, 'Third Party', 'website/uiw/src/routes/guide/recommendation')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Changelog', () => openBrowsers('https://github.com/uiwjs/uiw/releases')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Colors', () => UIWDocumentPanel.show(context.extensionUri, 'Colors', 'website/uiw/src/routes/guide/colors')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.ResetCss', () => UIWDocumentPanel.show(context.extensionUri, 'Reset CSS', 'website/uiw/src/routes/guide/reset-css')));
	
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Avatar', () => UIWDocumentPanel.show(context.extensionUri, 'Avatar', 'packages/react-affix')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Alert', () => UIWDocumentPanel.show(context.extensionUri, 'Alert', 'packages/react-alert')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Affix', () => UIWDocumentPanel.show(context.extensionUri, 'Affix', 'packages/react-affix')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.AutoLink', () => UIWDocumentPanel.show(context.extensionUri, 'AutoLink', 'packages/react-auto-link')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Badge', () => UIWDocumentPanel.show(context.extensionUri, 'Badge', 'packages/react-badge')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.BackTop', () => UIWDocumentPanel.show(context.extensionUri, 'BackTop', 'packages/react-back-top')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Button', () => UIWDocumentPanel.show(context.extensionUri, 'Button', 'packages/react-button')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.ButtonGroup', () => UIWDocumentPanel.show(context.extensionUri, 'ButtonGroup', 'packages/react-button-group')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Breadcrumb', () => UIWDocumentPanel.show(context.extensionUri, 'Breadcrumb', 'packages/react-breadcrumb')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Card', () => UIWDocumentPanel.show(context.extensionUri, 'Card', 'packages/react-card')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.CopyToClipboard', () => UIWDocumentPanel.show(context.extensionUri, 'CopyToClipboard', 'packages/react-copy-to-clipboard')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Checkbox', () => UIWDocumentPanel.show(context.extensionUri, 'Checkbox', 'packages/react-checkbox')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Collapse', () => UIWDocumentPanel.show(context.extensionUri, 'Collapse', 'packages/react-collapse')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Calendar', () => UIWDocumentPanel.show(context.extensionUri, 'Calendar', 'packages/react-calendar')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Divider', () => UIWDocumentPanel.show(context.extensionUri, 'Divider', 'packages/react-divider')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Descriptions', () => UIWDocumentPanel.show(context.extensionUri, 'Descriptions', 'packages/react-descriptions')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Drawer', () => UIWDocumentPanel.show(context.extensionUri, 'Drawer', 'packages/react-drawer')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Dropdown', () => UIWDocumentPanel.show(context.extensionUri, 'Dropdown', 'packages/react-dropdown')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.DatePicker', () => UIWDocumentPanel.show(context.extensionUri, 'DatePicker', 'packages/react-date-picker')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.DateInput', () => UIWDocumentPanel.show(context.extensionUri, 'DateInput', 'packages/react-date-input')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Grid', () => UIWDocumentPanel.show(context.extensionUri, 'Grid', 'packages/react-grid')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Overlay', () => UIWDocumentPanel.show(context.extensionUri, 'Overlay', 'packages/react-overlay')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.OverlayTrigger', () => UIWDocumentPanel.show(context.extensionUri, 'OverlayTrigger', 'packages/react-overlay-trigger')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Icon', () => UIWDocumentPanel.show(context.extensionUri, 'Icon', 'packages/react-icon')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Input', () => UIWDocumentPanel.show(context.extensionUri, 'Input', 'packages/react-input')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Layout', () => UIWDocumentPanel.show(context.extensionUri, 'Layout', 'packages/react-layout')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.List', () => UIWDocumentPanel.show(context.extensionUri, 'List', 'packages/react-list')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Loader', () => UIWDocumentPanel.show(context.extensionUri, 'Loader', 'packages/react-loader')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Menu', () => UIWDocumentPanel.show(context.extensionUri, 'Menu', 'packages/react-menu')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Modal', () => UIWDocumentPanel.show(context.extensionUri, 'Modal', 'packages/react-modal')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Message', () => UIWDocumentPanel.show(context.extensionUri, 'Message', 'packages/react-message')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.MonthPicker', () => UIWDocumentPanel.show(context.extensionUri, 'MonthPicker', 'packages/react-month-picker')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Notify', () => UIWDocumentPanel.show(context.extensionUri, 'Notify', 'packages/react-notify')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Popover', () => UIWDocumentPanel.show(context.extensionUri, 'Popover', 'packages/react-popover')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Progress', () => UIWDocumentPanel.show(context.extensionUri, 'Progress', 'packages/react-progress')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Pagination', () => UIWDocumentPanel.show(context.extensionUri, 'Pagination', 'packages/react-pagination')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Portal', () => UIWDocumentPanel.show(context.extensionUri, 'Portal', 'packages/react-portal')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.PinCode', () => UIWDocumentPanel.show(context.extensionUri, 'PinCode', 'packages/react-pin-code')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Rate', () => UIWDocumentPanel.show(context.extensionUri, 'Rate', 'packages/react-rate')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Radio', () => UIWDocumentPanel.show(context.extensionUri, 'Radio', 'packages/react-radio')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.RadioGroup', () => UIWDocumentPanel.show(context.extensionUri, 'RadioGroup', 'packages/react-radio')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Select', () => UIWDocumentPanel.show(context.extensionUri, 'Select', 'packages/react-select')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.SearchSelect', () => UIWDocumentPanel.show(context.extensionUri, 'SearchSelect', 'packages/react-search-select')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Switch', () => UIWDocumentPanel.show(context.extensionUri, 'Switch', 'packages/react-switch')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Slider', () => UIWDocumentPanel.show(context.extensionUri, 'Slider', 'packages/react-slider')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Steps', () => UIWDocumentPanel.show(context.extensionUri, 'Steps', 'packages/react-steps')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Split', () => openBrowsers('https://github.com/uiwjs/react-split')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Tag', () => UIWDocumentPanel.show(context.extensionUri, 'Tag', 'packages/react-tag')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Tree', () => UIWDocumentPanel.show(context.extensionUri, 'Tree', 'packages/react-tree')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.TreeChecked', () => UIWDocumentPanel.show(context.extensionUri, 'TreeChecked', 'packages/react-tree-checked')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Tabs', () => UIWDocumentPanel.show(context.extensionUri, 'Tabs', 'packages/react-tabs')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Table', () => UIWDocumentPanel.show(context.extensionUri, 'Table', 'packages/react-table')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Tooltip', () => UIWDocumentPanel.show(context.extensionUri, 'Tooltip', 'packages/react-tooltip')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.TimePicker', () => UIWDocumentPanel.show(context.extensionUri, 'TimePicker', 'packages/react-time-picker')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Textarea', () => UIWDocumentPanel.show(context.extensionUri, 'Textarea', 'packages/react-textarea')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Formatter', () => openBrowsers('https://github.com/uiwjs/date-formatter')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.Form', () => UIWDocumentPanel.show(context.extensionUri, 'Form', 'packages/react-form')));
	context.subscriptions.push(vscode.commands.registerCommand('uiw.cmd.FileInput', () => UIWDocumentPanel.show(context.extensionUri, 'FileInput', 'packages/react-file-input')));
}

// this method is called when your extension is deactivated
export function deactivate() {}
