import { EventHandlers, Identifier } from "@primitive_types";
import { EventInstanceStorage } from "../datas/EventInstanceStorage";

export const eventInstanceStorage = new EventInstanceStorage<EventHandlers.EventHandler>();

export function NHEventHandler({
    nodeIdentifier,
}: {
    nodeIdentifier: Identifier;
}) {
    return function <T extends typeof EventHandlers.EventHandler>(constructor: T): void {
        eventInstanceStorage.add(nodeIdentifier.type, constructor as unknown as EventHandlers.EventHandler);
    }
}