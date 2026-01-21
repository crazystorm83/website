import { NodeIdentifiers } from "@types";
import { NHNode } from "../../../decorators";
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