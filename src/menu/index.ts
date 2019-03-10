import * as vscode from 'vscode';

class Menu {
  context: vscode.ExtensionContext;
  constructor(context: vscode.ExtensionContext) {
    this.context = context;
  }
  /**
   * 菜单树数据写入入口
   * @声明标识符 async 标识符标识当前函数是异步执行函数
   * @param element 菜单中单击选中的节点文本
   */
  async getChildren(element: string) {
    console.log('element:', element);
  }
}

exports.Menu = Menu;