import { Node, NodeKey } from "../../10.browser_infra/nodes/Node";
import { IInternalEditor, NodeConfig } from "../@types/Editor";

export abstract class ElementNode extends Node {
    // declare ['constructor']: KlassConstructor<typeof ElementNode>;

    _editor: IInternalEditor;

    constructor(editor: IInternalEditor, key?: NodeKey) {
        super(key);

        this._editor = editor;
    }

    abstract buildCss(): string;
    abstract buildStyle(): string;

    getChildren<T extends Node | NodeConfig>(): T[] {
        return [] as T[];
    }

    append(...nodes: Node[]): void {
        this.splice(this.__size, 0, nodes);
    }

    splice(start: number, deleteCount: number, nodes: Array<Node>): void {
        this.getChildren<Node>()
    }

    remove(): void {
    }

    insertBefore(node: Node, before: Node): void {

    }

    insertAfter(node: Node, after: Node): void {

    }
}

export function $isElementNode(node: Node): node is ElementNode {
    return node instanceof ElementNode;
}

export function $isNode(value: unknown): value is Node {
    return value instanceof Node;
}