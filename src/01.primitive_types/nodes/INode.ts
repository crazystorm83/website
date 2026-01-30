import { ICommand } from "../command/ICommand";

export type NodeKey = string;
export interface INode {

}

export type NodeSerialize = {
    type: string;
    children: (NodeSerialize & NodeState<any>)[];
} & NodeState<any>;

export type NodeState<TState> = {
    state: TState;
}

export type NodeConfigSerialize = {
    __editorKey: string;

    __id: string;
    __parentId: string | null;
    __prevSiblingId: string | null;
    __nextSiblingId: string | null;
    __firstChildId: string | null;
    __lastChildId: string | null;
}

export type NodeConfig = NodeSerialize & NodeConfigSerialize;

export interface IInternalEditor extends IEditor {
    _config: NodeConfig;
}

export interface IEditor {
    registCommand: (command: ICommand, cb: () => void) => void;
}