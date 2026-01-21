import { EventIdentifiers, NodeIdentifiers } from "@types";
import { NHEventHandler } from "../../../decorators";
import { ElementNodeEventHandler } from "./ElementNodeEventHandler";

@NHEventHandler({
    nodeIdentifier: NodeIdentifiers.InputElementNodeIdentifier,
    identifier: EventIdentifiers.InputElementNodeEventHandlerIdentifier,
})
export class InputElementNodeEventHandler extends ElementNodeEventHandler {
    getType(): string {
        return NodeIdentifiers.InputElementNodeIdentifier.type;
    }
}