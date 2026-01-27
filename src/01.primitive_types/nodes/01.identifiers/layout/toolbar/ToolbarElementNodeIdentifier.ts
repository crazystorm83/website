import { createIdentifier } from "../../../../common/Identifier";
import { NodeIdentifier } from "../../../NodeIdentifier";

export const ToolbarElementNodeIdentifier = createIdentifier<NodeIdentifier>('toolbar');
export type ToolbarElementNodeIdentifier = typeof ToolbarElementNodeIdentifier;