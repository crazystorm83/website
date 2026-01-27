import { createIdentifier } from "../../../../common/Identifier";
import { NodeIdentifier } from "../../../NodeIdentifier";

export const FormListLabelElementNodeIdentifier = createIdentifier<NodeIdentifier>('li');
export type FormListLabelElementNodeIdentifier = typeof FormListLabelElementNodeIdentifier;