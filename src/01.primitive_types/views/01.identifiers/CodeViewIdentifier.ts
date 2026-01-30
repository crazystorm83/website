import { createIdentifier } from "../../common/Identifier";
import { ViewIdentifier } from "../ViewIdentifier";

export const CodeViewIdentifier = createIdentifier<ViewIdentifier>('code_view');
export type CodeViewIdentifier = typeof CodeViewIdentifier;