import { NodeIdentifiers } from "@types";
import { NHNode } from "../../../decorators";
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