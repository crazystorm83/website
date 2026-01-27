import { Identifier, INode } from "@primitive_types";
import { NodeInstanceStorage } from "../datas/NodeInstanceStorage";

export const nodeInstanceStorage = new NodeInstanceStorage<any>();

export function NHNode({
    identifier,
}: {
    identifier: Identifier;
}) {
    return <T extends abstract new (...args: any[]) => INode>(constructor: T): void => {
        nodeInstanceStorage.add(identifier.type, constructor);
    }
}
