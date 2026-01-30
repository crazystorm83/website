import { NodeIdentifiers } from "@primitive_types";
import { NHNode } from "@browser_infra";
import { ElementNode } from "../../ElementNode";

@NHNode({
    identifier: NodeIdentifiers.TheadElementNodeIdentifier,
})
export class TheadElementNode extends ElementNode {
    buildCss(): string {
        return '';
    }

    buildStyle(): string {
        return '';
    }

    getType(): string {
        return NodeIdentifiers.TheadElementNodeIdentifier.type;
    }

    createDOM(): HTMLElement {
        return document.createElement('thead');
    }

    updateDOM(): boolean {
        return true;
    }
}