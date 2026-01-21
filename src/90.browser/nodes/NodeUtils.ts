import { $isElementNode } from ".";
import { throwException } from "../../01.browser_foundation/@types/exception/ThrowException";
import { Node } from "./Node";

export function $getNodeByKey<T extends Node>(nodeMap: Map<string, T>, key: string): T | null {
    return nodeMap.get(key) ?? null;
}

export function $appendNode() {

}

export function $spliceNode(node: Node, start: number, deleteCount: number, nodes: Array<Node>) {
    if ($isElementNode(node)) {
        node.append(...nodes);
    } else {
        throwException(false, 'Node is not an instance of ElementNode or its subclass');
    }
}