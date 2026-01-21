import { createIdentifier } from "../../common/Identifier";
import { NodeIdentifier } from "../NodeIdentifier";

export const InputElementNodeIdentifier = createIdentifier<NodeIdentifier>('input');
export type InputElementNodeIdentifier = typeof InputElementNodeIdentifier;