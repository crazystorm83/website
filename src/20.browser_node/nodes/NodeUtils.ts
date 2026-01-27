
import { throwException } from "@browser_foundation";
import { Node } from "@browser_infra";
import { $isElementNode } from "./ElementNode";

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