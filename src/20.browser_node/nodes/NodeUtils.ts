import { $isElementNode } from ".";
import { throwException } from "../../05.browser_foundation/exception/ThrowException";
import { Node } from "../../10.browser_infra/nodes/Node";

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