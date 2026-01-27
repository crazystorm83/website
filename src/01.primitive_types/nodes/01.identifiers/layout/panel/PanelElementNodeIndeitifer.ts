import { createIdentifier } from "../../../../common/Identifier";
import { NodeIdentifier } from "../../../NodeIdentifier";

export const PanelElementNodeIdentifier = createIdentifier<NodeIdentifier>('panel');
export type PanelElementNodeIdentifier = typeof PanelElementNodeIdentifier;