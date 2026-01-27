import { NHEventHandler } from "@browser_infra/decorators/NHEventHandler";
import { EventIdentifiers, NodeIdentifiers } from "@primitive_types";
import { ElementNodeEventHandler } from "./ElementNodeEventHandler";

@NHEventHandler({
    nodeIdentifier: NodeIdentifiers.InputElementNodeIdentifier,
})
export class InputElementNodeEventHandler extends ElementNodeEventHandler {
    getType(): string {
        return NodeIdentifiers.InputElementNodeIdentifier.type;
    }
}