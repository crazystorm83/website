import { createIdentifier } from "../../common/Identifier";
import { NodeIdentifier } from "../NodeIdentifier";

export const LabelElementNodeIdentifier = createIdentifier<NodeIdentifier>('label');
export type LabelElementNodeIdentifier = typeof LabelElementNodeIdentifier;