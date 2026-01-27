import { createIdentifier } from "../../common/Identifier";
import { EventHandlerIdentifier } from "../EventHandlerIdentifier";

export const LabelElementNodeEventHandlerIdentifier = createIdentifier<EventHandlerIdentifier>('label_eventhandler');
export type LabelElementNodeEventHandlerIdentifier = typeof LabelElementNodeEventHandlerIdentifier;