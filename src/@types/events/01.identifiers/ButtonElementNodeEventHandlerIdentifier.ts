import { createIdentifier } from "../../common/Identifier";
import { EventHandlerIdentifier } from "../EventHandlerIdentifier";

export const ButtonElementNodeEventHandlerIdentifier = createIdentifier<EventHandlerIdentifier>('button_eventhandler');
export type ButtonElementNodeEventHandlerIdentifier = typeof ButtonElementNodeEventHandlerIdentifier;