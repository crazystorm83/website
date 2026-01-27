import { NodeIdentifiers } from "@primitive_types";
import { NHNode } from "@browser_infra/decorators/NHNode";
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