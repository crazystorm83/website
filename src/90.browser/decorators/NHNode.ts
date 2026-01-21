import { Identifier } from "@types";
import { NodeInstanceStorage } from "../datas/NodeInstanceStorage";
import { Node } from "../nodes";

export const nodeInstanceStorage = new NodeInstanceStorage<any>();

export function NHNode({
    identifier,
}: {
    identifier: Identifier;
}) {
    return <T extends abstract new (...args: any[]) => Node>(constructor: T): void => {
        constructor.prototype.getType = function () {
            return identifier.type;
        }
        nodeInstanceStorage.add(constructor);
    }
}