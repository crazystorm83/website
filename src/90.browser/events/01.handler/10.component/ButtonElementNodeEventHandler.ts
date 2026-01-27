import { EventIdentifiers, NodeIdentifiers } from "@primitive_types";
import { NHEventHandler } from "@browser_infra/decorators/NHEventHandler";
import { ElementNodeEventHandler } from "./ElementNodeEventHandler";

@NHEventHandler({
    nodeIdentifier: NodeIdentifiers.ButtonElementNodeIdentifier,
})
export class ButtonElementNodeEventHandler extends ElementNodeEventHandler {
    getType(): string {
        return NodeIdentifiers.ButtonElementNodeIdentifier.type;
    }
}