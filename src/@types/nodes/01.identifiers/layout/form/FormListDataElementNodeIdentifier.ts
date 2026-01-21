import { createIdentifier } from "../../../../common/Identifier";
import { NodeIdentifier } from "../../../NodeIdentifier";

export const FormListDataElementNodeIdentifier = createIdentifier<NodeIdentifier>('li');
export type FormListDataElementNodeIdentifier = typeof FormListDataElementNodeIdentifier;