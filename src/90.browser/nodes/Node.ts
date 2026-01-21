import { throwException } from "../../01.browser_foundation/@types/exception/ThrowException";
import { ICommand } from "../@types/Command";
import { NodeSerialize, NodeState } from "../App";
import { createNodeSequentialUID } from "../utils";

export type Spread<T1, T2> = Omit<T2, keyof T1> & T1;

// https://github.com/microsoft/TypeScript/issues/3841
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type KlassConstructor<Cls extends GenericConstructor<any>> =
    GenericConstructor<InstanceType<Cls>> & { [k in keyof Cls]: Cls[k] };
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GenericConstructor<T> = new (...args: any[]) => T;

// export type Klass<T extends Node> = InstanceType<
//   T['constructor']
// > extends T
//   ? T['constructor']
//   : GenericConstructor<T> & T['constructor'];

export type NodeKey = string;

export abstract class Node {
    __key!: NodeKey;
    __parent: null | NodeKey;
    __prev: null | NodeKey;
    __next: null | NodeKey;

    __size: number = 0;

    //['constructor']!: KlassConstructor<typeof Node>;

    constructor(key?: NodeKey) {
        this.__parent = null;
        this.__prev = null;
        this.__next = null;
        this.__key = key ?? createNodeSequentialUID();
    }

    _config: NodeSerialize & NodeState<any> | undefined;

    setConfig(config: NodeSerialize & NodeState<any> | undefined): void {
        this._config = config;
    }

    createDOM(): HTMLElement | DocumentFragment {
        throwException(false, 'createDOM must be implemented');
    }

    updateDOM(): boolean {
        throwException(false, 'updateDOM must be implemented');
    }

    $config() {

    }
}


export function createCommand(type: string): ICommand {
    return { type }
}