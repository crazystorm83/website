import { createIdentifier } from "../../common/Identifier";
import { NodeIdentifier } from "../NodeIdentifier";

export const ButtonElementNodeIdentifier = createIdentifier<NodeIdentifier>('button');
export type ButtonElementNodeIdentifier = typeof ButtonElementNodeIdentifier;