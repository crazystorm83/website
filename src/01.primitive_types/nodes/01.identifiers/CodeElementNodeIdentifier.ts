import { createIdentifier } from "../../common/Identifier";
import { NodeIdentifier } from "../NodeIdentifier";

export const CodeElementNodeIdentifier = createIdentifier<NodeIdentifier>('code');
export type CodeElementNodeIdentifier = typeof CodeElementNodeIdentifier;