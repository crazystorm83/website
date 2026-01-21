import { EventIdentifiers, NodeIdentifiers } from "@types";
import { NHEventHandler } from "../../../decorators";
import { ElementNodeEventHandler } from "./ElementNodeEventHandler";

@NHEventHandler({
    nodeIdentifier: NodeIdentifiers.ButtonElementNodeIdentifier,
    identifier: EventIdentifiers.ButtonElementNodeEventHandlerIdentifier,
})
export class ButtonElementNodeEventHandler extends ElementNodeEventHandler {
    getType(): string {
        return NodeIdentifiers.ButtonElementNodeIdentifier.type;
    }
}