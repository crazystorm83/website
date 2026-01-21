import { NodeIdentifiers } from "@types";
import { NHNode } from "../../../decorators";
import { ElementNode } from "../../ElementNode";

@NHNode({
    identifier: NodeIdentifiers.TfootElementNodeIdentifier,
})
export class TfootElementNode extends ElementNode {
    buildCss(): string {
        return '';
    }

    buildStyle(): string {
        return '';
    }

    getType(): string {
        return NodeIdentifiers.TfootElementNodeIdentifier.type;
    }

    createDOM(): HTMLElement {
        return document.createElement('tfoot');
    }

    updateDOM(): boolean {
        return true;
    }
}