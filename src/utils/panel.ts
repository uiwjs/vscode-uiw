import * as vscode from 'vscode';
import * as marked from 'marked';
import 'prismjs';
import * as Prism from 'prismjs';

import { getReadme } from '../api';
import { reloadHTML, reloadErrorHTML } from './mdHTML';

import * as loadLanguages from 'prismjs/components/';

loadLanguages(['javascript', 'jsx', 'css', 'markup', 'bash', 'json', 'less', 'bash', 'shell', 'diff', 'bash']);

marked.setOptions({
  highlight: (code, lang) => {
    if (!lang) {
      lang = 'bash';
    }
    if (!Prism.languages[lang]) {
      return code
    }
    return Prism.highlight(code, Prism.languages[lang], lang);
  }
});

const docPath = (path: string) => /^(http(?:|s)\:)\//.test(path) ? path : `https://raw.githubusercontent.com/uiwjs/uiw/master/${path}/README.md`;
const docGithubPath = (path: string) => /^(http(?:|s)\:)\//.test(path) ? path : `https://github.com/uiwjs/uiw/tree/master/${path}/README.md`;

type HtmlForWebviewOption = {
  webview: vscode.Webview
  extensionUri: vscode.Uri
  title: string
  html: string
  mdRawURL: string
  githubMDURL?: String
}

export class UIWDocumentPanel {
	public static readonly viewType = 'UIWDocument';
	public static async show(extensionUri: vscode.Uri, title: string = 'UIW Document', url: string) {
		const column = vscode.window.activeTextEditor ? vscode.window.activeTextEditor.viewColumn : undefined;
		const panel = vscode.window.createWebviewPanel(
			UIWDocumentPanel.viewType,
			title,
			column || vscode.ViewColumn.One,
      {
        enableScripts: true,
        retainContextWhenHidden: true
      }
		);
    try {
      panel.webview.html = reloadHTML()
      const mdStr = await getReadme(docPath(url))
      const mdToHTML = marked.parse(mdStr.toString());
      panel.webview.html = this._getHtmlForWebview({
        title, extensionUri,
        webview: panel.webview,
        mdRawURL: docGithubPath(url),
        html: mdToHTML
      });
    } catch (error) {
      panel.webview.html = reloadErrorHTML()
    }
	}

	private static _getHtmlForWebview( options: HtmlForWebviewOption ) {
    const { webview, extensionUri, html, mdRawURL } = options || {}
    const stylePath = webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, 'style', 'github-light.css'));
		const prismPath = webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, 'style', 'github-prismjs.css'));
		return `<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
        <title>UIW Document</title>
        <link href="${stylePath}" rel="stylesheet" />
        <link href="${prismPath}" rel="stylesheet" />
        <style type="text/css">
          .openWebsite { position: absolute; top: 10px; right: 10px; }
          .openWebsite a { display: inline-block; border-radius: 3px; background-color: #008EF0; color: #fff; line-height: 14px; font-size: 14px; cursor: pointer; padding: 5px 7px; }
          .openWebsite a:hover { color: #fff; background-color: #0070bd; }
        </style>
			</head>
			<body>
        <div class="openWebsite">
        <a href="${mdRawURL}">For Github</a>
        <a href="https://uiwjs.github.io/">官网</a>
        </div>
        <div class="markdown-body">
          ${html}
        <div>
			</body>
			</html>`;
	}
}
