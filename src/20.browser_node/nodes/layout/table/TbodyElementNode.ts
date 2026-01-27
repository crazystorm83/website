import { NodeIdentifiers } from "@primitive_types";
import { NHNode } from "@browser_infra/decorators/NHNode";
import { ElementNode } from "../../ElementNode";

@NHNode({
    identifier: NodeIdentifiers.TbodyElementNodeIdentifier,
})
export class TbodyElementNode extends ElementNode {
    buildCss(): string {
        return '';
    }

    buildStyle(): string {
        return '';
    }

    getType(): string {
        return NodeIdentifiers.TbodyElementNodeIdentifier.type;
    }

    createDOM(): HTMLElement {
        return document.createElement('tbody');
    }

    updateDOM(): boolean {
        return true;
    }
}