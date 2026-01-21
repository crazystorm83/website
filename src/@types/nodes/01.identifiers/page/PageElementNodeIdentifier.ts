import { createIdentifier } from "../../../common/Identifier";
import { NodeIdentifier } from "../../NodeIdentifier";

export const PageElementNodeIdentifier = createIdentifier<NodeIdentifier>('page');
export type PageElementNodeIdentifier = typeof PageElementNodeIdentifier;