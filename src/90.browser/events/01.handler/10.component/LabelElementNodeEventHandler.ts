import { NHEventHandler } from "@browser_infra/decorators/NHEventHandler";
import { NodeIdentifiers } from "@primitive_types";
import { ElementNodeEventHandler } from "./ElementNodeEventHandler";

@NHEventHandler({
    nodeIdentifier: NodeIdentifiers.LabelElementNodeIdentifier,
})
export class LabelElementNodeEventHandler extends ElementNodeEventHandler {
    getType(): string {
        return NodeIdentifiers.LabelElementNodeIdentifier.type;
    }
}