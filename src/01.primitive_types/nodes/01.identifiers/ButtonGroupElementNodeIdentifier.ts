import { createIdentifier } from "../../common/Identifier";
import { NodeIdentifier } from "../NodeIdentifier";

export const ButtonGroupElementNodeIdentifier = createIdentifier<NodeIdentifier>('button_group');
export type ButtonGroupElementNodeIdentifier = typeof ButtonGroupElementNodeIdentifier;