


export type NodeSerialize = {
    type: string;
    children: (NodeSerialize & NodeState<any>)[];
} & NodeState<any>;

export type NodeState<TState> = {
    state: TState;
}





export type EditorUpdate = () => void;
export type EditorUpdateOptions = {
    sync: boolean;
}