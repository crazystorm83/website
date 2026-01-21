import { NodeIdentifiers } from "@types";
import { NHNode } from "../../../decorators";
import { ElementNode } from "../../ElementNode";

@NHNode({
    identifier: NodeIdentifiers.FormListElementNodeIdentifier,
})
export class FormListElementNode extends ElementNode {
    buildCss(): string {
        return '';
    }

    buildStyle(): string {
        return '';
    }

    getType(): string {
        return NodeIdentifiers.FormListElementNodeIdentifier.type;
    }

    createDOM(): HTMLElement {
        const formListEl = document.createElement('ul');
        formListEl.className = 'form-list';
        return formListEl;
    }

    updateDOM(): boolean {
        return true;
    }
}