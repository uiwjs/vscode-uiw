
import * as vscode from 'vscode';
import { NodeBase } from './nodeBase';
import { TreeMenu } from '../extensionVariables';

function toFirstUpperCase(str: string) {
  return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}  

export default class RootNode extends NodeBase {
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
      const { name, icon, path } = this.label;
      item.collapsibleState = 0;
      item.command = {
        title: 'Overlay',
        command: 'uiw.cmd.Overlay',
      };
      if (/^(http|https)/.test(path || '')) {
        item.command.title = name;
        item.command.command = `uiw.cmd.${icon}`;
      } else if (path) {
        const componentTitle = path.split('-').map(itt => toFirstUpperCase(itt));
        item.command.title = componentTitle.join(' ');
        item.command.command = `uiw.cmd.${componentTitle.join('')}`;
      }
    }
    return {
      label: this.label.name,
      collapsibleState: vscode.TreeItemCollapsibleState.Collapsed,
      contextValue: this.contextValue,
      ...item,
    };
  }
}
