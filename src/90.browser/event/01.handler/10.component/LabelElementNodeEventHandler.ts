import { EventIdentifiers, NodeIdentifiers } from "@types";
import { NHEventHandler } from "../../../decorators";
import { ElementNodeEventHandler } from "./ElementNodeEventHandler";

@NHEventHandler({
    nodeIdentifier: NodeIdentifiers.LabelElementNodeIdentifier,
    identifier: EventIdentifiers.LabelElementNodeEventHandlerIdentifier,
})
export class LabelElementNodeEventHandler extends ElementNodeEventHandler {
    getType(): string {
        return NodeIdentifiers.LabelElementNodeIdentifier.type;
    }
}