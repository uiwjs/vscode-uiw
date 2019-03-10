/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See LICENSE.md in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as vscode from 'vscode';
import { TreeMenu } from '../extensionVariables';

export type IconPath = string | vscode.Uri | { light: string | vscode.Uri; dark: string | vscode.Uri } | vscode.ThemeIcon;

export abstract class NodeBase {
    public readonly label: TreeMenu;
    public abstract readonly contextValue: string;
    public readonly children: TreeMenu[] | undefined;

    protected constructor(label: TreeMenu) {
        this.label = label;
    }

    public getTreeItem(): vscode.TreeItem {
        return {
            label: this.label.name,
            collapsibleState: vscode.TreeItemCollapsibleState.None,
            contextValue: this.contextValue,
            iconPath: this.iconPath
        };
    }

    public async getChildren(element: NodeBase): Promise<NodeBase[]> {
        return [];
    }

    public iconPath?: IconPath;
}
