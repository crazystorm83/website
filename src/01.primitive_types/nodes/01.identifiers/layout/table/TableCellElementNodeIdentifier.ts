import { createIdentifier } from "../../../../common/Identifier";
import { NodeIdentifier } from "../../../NodeIdentifier";

export const TableCellElementNodeIdentifier = createIdentifier<NodeIdentifier>('td');
export type TableCellElementNodeIdentifier = typeof TableCellElementNodeIdentifier;