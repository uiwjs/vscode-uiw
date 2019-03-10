
import * as vscode from 'vscode';
import { NodeBase } from './nodeBase';
import { TreeMenu } from '../extensionVariables';


export class RootNode extends NodeBase {
  submen: TreeMenu[] | undefined;
  constructor(
    public readonly label: TreeMenu,
    public readonly contextValue: 'dirRootNode' | 'containersRootNode' | 'registriesRootNode',
    public eventEmitter: vscode.EventEmitter<NodeBase>
  ) {
    super(label);
    this.submen = label.children;
  }
  public getTreeItem(): vscode.TreeItem {
    const item:vscode.TreeItem = {};
    if (!this.label.children) {
      console.log('element:', this.label);
      item.collapsibleState = 0;
      item.command = {
        title: 'Overlay',
        command: 'uiw.cmd.Overlay',
      };
    }
    return {
      label: this.label.name,
      collapsibleState: vscode.TreeItemCollapsibleState.Collapsed,
      contextValue: this.contextValue,
      ...item,
    };
  }
}