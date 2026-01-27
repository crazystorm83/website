import { NodeIdentifiers } from "@primitive_types";
import { NHNode } from "@browser_infra/decorators/NHNode";
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