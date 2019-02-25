import * as vscode from 'vscode';
import * as fs from 'fs-extra';
import * as path from 'path';
import * as marked from 'marked';
import * as Prism from 'prismjs';
import { getReadme } from '../api';
import { getLoadingHTML } from './tempHTML';
import { getWebviewContent } from './mdHTML';
import { fromCamelCase } from './index';

require('prismjs/components/prism-tsx.js');
require('prismjs/components/prism-less.js');
require('prismjs/components/prism-jsx.js');
require('prismjs/components/prism-bash.js');

marked.setOptions({
  highlight: (code, lang) => {
    if (!lang) {
      lang = 'bash';
    }
    return Prism.highlight(code, Prism.languages[lang]);
  }
});

const docPath = (path: string) => `https://raw.githubusercontent.com/uiwjs/uiw/master/${path}/README.md`;

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
  repath = repath ? repath : `packages/core/src/${fromCamelCase(name)}`;
  repath = docPath(repath);
  panel.webview.html = getLoadingHTML({ name, url: repath });
  try {
    const md = await getReadme(repath);
    const stylePath = vscode.Uri.file(path.join(context.extensionPath, 'style', 'github-light.css'));
    const lightPath = vscode.Uri.file(path.join(context.extensionPath, 'style', 'github-prismjs.css'));
    const cssStr = `${fs.readFileSync(stylePath.path)}\n${fs.readFileSync(lightPath.path)}`;
    const mdStr = marked(md.toString());
    panel.webview.html = getWebviewContent(mdStr.toString(), cssStr);
    // Display a message box to the user
    vscode.window.showInformationMessage(`Open ${name} Document!`);
  } catch (error) {
    // console.log('error:', error);
    vscode.window.showErrorMessage(`Open ${name} Document errors! ${error.message}`);
  }
}