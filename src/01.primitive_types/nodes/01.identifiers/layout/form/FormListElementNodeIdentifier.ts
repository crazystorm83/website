import { createIdentifier } from "../../../../common/Identifier";
import { NodeIdentifier } from "../../../NodeIdentifier";

export const FormListElementNodeIdentifier = createIdentifier<NodeIdentifier>('ul');
export type FormListElementNodeIdentifier = typeof FormListElementNodeIdentifier;