import { EventHandlers, Identifier } from "@types";
import { EventInstanceStorage } from "../datas/EventInstanceStorage";

export const eventInstanceStorage = new EventInstanceStorage<EventHandlers.EventHandler>();

export function NHEventHandler({
    nodeIdentifier,
    identifier,
}: {
    nodeIdentifier: Identifier;
    identifier: Identifier;
}) {
    return function <T extends typeof EventHandlers.EventHandler>(constructor: T): void {
        eventInstanceStorage.add(constructor as unknown as EventHandlers.EventHandler);
    }
}