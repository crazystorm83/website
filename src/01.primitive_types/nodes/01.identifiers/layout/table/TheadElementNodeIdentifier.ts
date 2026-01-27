import { createIdentifier } from "../../../../common/Identifier";
import { NodeIdentifier } from "../../../NodeIdentifier";

export const TheadElementNodeIdentifier = createIdentifier<NodeIdentifier>('thead');
export type TheadElementNodeIdentifier = typeof TheadElementNodeIdentifier;