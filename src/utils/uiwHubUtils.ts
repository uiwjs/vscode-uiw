import axios, { AxiosResponse } from 'axios';
import * as vscode from 'vscode';
import { TreeMenu } from '../extensionVariables';

export async function getComponetMenus(): Promise<TreeMenu[]> {
  // https://github.com/Microsoft/TypeScript/issues/29684
  let tree !: TreeMenu[];
  try {
    const { data } = <AxiosResponse>await axios.get('https://raw.githubusercontent.com/uiwjs/uiw/master/src/common/menu.json');
    if (data) {
      tree = data;
    }
  } catch (error) {
    console.log(error);
    vscode.window.showErrorMessage('uiw: Unable to retrieve Repository Menu.');
  }
  return tree;
}