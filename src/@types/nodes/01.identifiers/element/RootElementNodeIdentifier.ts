import { createIdentifier } from "../../../common/Identifier";
import { NodeIdentifier } from "../../NodeIdentifier";

export const RootElementNodeIdentifier = createIdentifier<NodeIdentifier>('root');
export type RootElementNodeIdentifier = typeof RootElementNodeIdentifier;