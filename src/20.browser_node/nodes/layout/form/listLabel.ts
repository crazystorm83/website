import { NodeIdentifiers } from "@primitive_types";
import { NHNode } from "@browser_infra";
import { ElementNode } from "../../ElementNode";

@NHNode({
    identifier: NodeIdentifiers.FormListLabelElementNodeIdentifier,
})
export class FormListLabelElementNode extends ElementNode {
    buildCss(): string {
        return '';
    }

    buildStyle(): string {
        return '';
    }

    static getType(): string {
        return NodeIdentifiers.FormListLabelElementNodeIdentifier.type;
    }

    createDOM(): HTMLElement {
        const formListLabelEl = document.createElement('li');
        formListLabelEl.className = 'form-list-label';
        return formListLabelEl;
    }

    updateDOM(): boolean {
        return true;
    }
}