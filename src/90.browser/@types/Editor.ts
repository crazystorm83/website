import { ICommand } from "../../01.primitive_types/command/ICommand";

export type NodeKey = string;

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
    __parent: string | null;
    __prev: string | null;
    __next: string | null;
}

export type NodeConfig = NodeSerialize & NodeConfigSerialize;

export interface IInternalEditor extends IEditor {
    _config: NodeConfig;
}

export interface IEditor {
    registCommand: (command: ICommand, cb: () => void) => void;
}

export type EditorUpdate = () => void;
export type EditorUpdateOptions = {
    sync: boolean;
}