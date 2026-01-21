import { createIdentifier } from "../../../../common/Identifier";
import { NodeIdentifier } from "../../../NodeIdentifier";

export const TableElementNodeIdentifier = createIdentifier<NodeIdentifier>('table');
export type TableElementNodeIdentifier = typeof TableElementNodeIdentifier;