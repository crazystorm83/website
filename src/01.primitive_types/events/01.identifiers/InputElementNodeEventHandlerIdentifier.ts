import { createIdentifier } from "../../common/Identifier";
import { EventHandlerIdentifier } from "../EventHandlerIdentifier";

export const InputElementNodeEventHandlerIdentifier = createIdentifier<EventHandlerIdentifier>('input_eventhandler');
export type InputElementNodeEventHandlerIdentifier = typeof InputElementNodeEventHandlerIdentifier;