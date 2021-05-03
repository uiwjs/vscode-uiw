import * as vscode from 'vscode';
import { NodeBase } from './nodeBase';
import RootNode from './rootNode';
import { getComponetMenus } from '../utils/uiwHubUtils';
import { TreeMenu } from '../extensionVariables';

export class Menu implements vscode.TreeDataProvider<NodeBase>{
  private _onDidChangeTreeData: vscode.EventEmitter<NodeBase> = new vscode.EventEmitter<NodeBase>();
  public readonly onDidChangeTreeData: vscode.Event<NodeBase> = this._onDidChangeTreeData.event;
  public getTreeItem(element: NodeBase): vscode.TreeItem | Thenable<vscode.TreeItem> {
    return element.getTreeItem();
  }
  public async getChildren(element?: NodeBase): Promise<NodeBase[]> {
    if (!element) {
      const menus = await getComponetMenus();
      for (let item of menus) {
        if (item.children) {
          let menuItems!: TreeMenu[];
          let num = 0;
          if (!menuItems) {
            menuItems = [];
          }
          for (let i = 0; i < item.children.length; i++) {
            if (num === 0 && !item.children[i].divider) {
              menuItems.push(item.children[i]);
            } else if (item.children[i].divider && !item.children[i].children) {
              num += 1;
              item.children[i].children = [];
              menuItems.push(item.children[i]);
            } else {
              const itemInner = menuItems[num] || menuItems[num-1];
              if (itemInner && itemInner.children) {
                const tt = itemInner.children;
                if (tt) {
                  tt.push(item.children[i]);
                }
              }
            }
          }
          item.children = menuItems;
        }
      }
      return this.getRootNodes(menus);
    }
    if (element.label && element.label.children && element.label.children.length > 0) {
      return this.getRootNodes(element.label.children);
    }
    return element.getChildren(element);
  }

  public refresh(): void {
    console.log('~~~refresh');
  }

  private async getRootNodes(menus: TreeMenu[] ): Promise<RootNode[]> {
    const rootNodes: RootNode[] = [];
    let node: RootNode;

    menus.forEach((item) => {
      node = new RootNode(item, 'dirRootNode', this._onDidChangeTreeData);
      rootNodes.push(node);
    });
    
    return rootNodes;
  }
}
