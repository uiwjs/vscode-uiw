// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { webviewPanel } from './utils/panel';

const openBrowsers = require('open-browsers');
// decide what os should be used
// possible node values 'darwin', 'freebsd', 'linux', 'sunos' or 'win32'
// const platform = process.platform;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "vscode-uiw" is now active!');
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwDocument', () => openBrowsers('https://uiwjs.github.io/')));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwQuickStart', () => webviewPanel('QuickStart', context, 'src/routes/guide/quick-start')));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwCreateReactApp', () => webviewPanel('CreateReactApp', context, 'src/routes/guide/create-react-app')));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwKKT', () => webviewPanel('KKT', context, 'src/routes/guide/kkt')));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwDocs', () => webviewPanel('Write', context, 'src/routes/guide/docs')));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwThirdParty', () => webviewPanel('uiwThirdParty', context, 'src/routes/guide/recommendation')));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwChangelog', () => webviewPanel('uiwChangelog', context, 'src/routes/guide/changelog')));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwColor', () => webviewPanel('Color', context, 'src/routes/components/colors')));

	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwAvatar', () => webviewPanel('Avatar', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwAlert', () => webviewPanel('Alert', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwAffix', () => webviewPanel('Affix', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwBadge', () => webviewPanel('Badge', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwBackTop', () => webviewPanel('BackTop', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwButton', () => webviewPanel('Button', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwButtonGroup', () => webviewPanel('Button', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwBreadcrumb', () => webviewPanel('Breadcrumb', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwCard', () => webviewPanel('Card', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwCol', () => webviewPanel('Col', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwCopyToClipboard', () => webviewPanel('CopyToClipboard', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwCheckbox', () => webviewPanel('Checkbox', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwCollapse', () => webviewPanel('Collapse', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwDivider', () => webviewPanel('Divider', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwDrawer', () => webviewPanel('Drawer', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwDatePicker', () => webviewPanel('DatePicker', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwDateInput', () => webviewPanel('DateInput', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwOverlay', () => webviewPanel('Overlay', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwOverlayTrigger', () => webviewPanel('OverlayTrigger', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwIcon', () => webviewPanel('Icon', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwInput', () => webviewPanel('Input', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwList', () => webviewPanel('List', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwMenu', () => webviewPanel('Menu', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwModal', () => webviewPanel('Modal', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwMessage', () => webviewPanel('Message', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwMonthPicker', () => webviewPanel('MonthPicker', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwNotify', () => webviewPanel('Notify', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwPopover', () => webviewPanel('Popover', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwProgress', () => webviewPanel('Progress', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwPortal', () => webviewPanel('Portal', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwRow', () => webviewPanel('Row', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwRate', () => webviewPanel('Rate', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwRadio', () => webviewPanel('Radio', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwRadioGroup', () => webviewPanel('Radio', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwSelect', () => webviewPanel('Select', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwSwitch', () => webviewPanel('Switch', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwSteps', () => webviewPanel('Steps', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwSplit', () => webviewPanel('Split', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwTag', () => webviewPanel('Tag', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwTabs', () => webviewPanel('Tabs', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwTable', () => webviewPanel('Table', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwTooltip', () => webviewPanel('Tooltip', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwTimestamp', () => webviewPanel('Timestamp', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwTimePicker', () => webviewPanel('TimePicker', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwTextarea', () => webviewPanel('Textarea', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwForm', () => webviewPanel('Form', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwFileInput', () => webviewPanel('FileInput', context)));
	context.subscriptions.push(vscode.commands.registerCommand('extension.uiwFormItem', () => webviewPanel('FormItem', context)));
}

// this method is called when your extension is deactivated
export function deactivate() {}
