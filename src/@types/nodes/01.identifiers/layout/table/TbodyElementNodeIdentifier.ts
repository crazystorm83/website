import { createIdentifier } from "../../../../common/Identifier";
import { NodeIdentifier } from "../../../NodeIdentifier";

export const TbodyElementNodeIdentifier = createIdentifier<NodeIdentifier>('tbody');
export type TbodyElementNodeIdentifier = typeof TbodyElementNodeIdentifier;