import { createIdentifier } from "../../../../common/Identifier";
import { NodeIdentifier } from "../../../NodeIdentifier";

export const TfootElementNodeIdentifier = createIdentifier<NodeIdentifier>('tfoot');
export type TfootElementNodeIdentifier = typeof TfootElementNodeIdentifier;