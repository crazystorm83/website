import { createIdentifier } from "../../../../common/Identifier";
import { NodeIdentifier } from "../../../NodeIdentifier";

export const TableRowElementNodeIdentifier = createIdentifier<NodeIdentifier>('tr');
export type TableRowElementNodeIdentifier = typeof TableRowElementNodeIdentifier;