import * as vscode from 'vscode';
import * as fs from 'fs-extra';
import * as path from 'path';
import * as marked from 'marked';
import { getReadme } from '../api';
import { getLoadingHTML } from './tempHTML';
import { getWebviewContent } from './mdHTML';

const fromCamelCase = (str: string, separator = '-') => str
  .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
  .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
  .toLowerCase();

export async function webviewPanel(name: string, context: vscode.ExtensionContext, repath?: string) {
  // createWebviewPanel(
  // viewType: string, 
  // title: string, 
  // showOptions: ViewColumn | { viewColumn: ViewColumn, preserveFocus?: boolean },
  //  options?: WebviewPanelOptions & WebviewOptions): WebviewPanel;
  const panel = vscode.window.createWebviewPanel('uiw', `${name} Component!`, vscode.ViewColumn.One,
    {
      enableScripts: true,
      retainContextWhenHidden: true
    }
  );
  panel.webview.html = getLoadingHTML({ });
  try {
    repath = repath ? repath : `packages/core/src/${fromCamelCase(name)}`;
    const md = await getReadme(repath);
    const cssPath = vscode.Uri.file(path.join(context.extensionPath, 'src', 'style', 'index.css'));
    const cssStr = fs.readFileSync(cssPath.path);
    const mdStr = marked(md.toString());
    panel.webview.html = getWebviewContent(mdStr.toString(), cssStr.toString());
    // Display a message box to the user
    vscode.window.showInformationMessage(`Open ${name} Document!`);
  } catch (error) {
    console.log('error:', error);
    vscode.window.showErrorMessage(`Open ${name} Document errors!`);
  }
}