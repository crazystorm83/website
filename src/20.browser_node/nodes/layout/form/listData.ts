import { NodeIdentifiers } from "@primitive_types";
import { NHNode } from "@browser_infra";
import { ElementNode } from "../../ElementNode";

@NHNode({
    identifier: NodeIdentifiers.FormListDataElementNodeIdentifier,
})
export class FormListDataElementNode extends ElementNode {
    buildCss(): string {
        return '';
    }

    buildStyle(): string {
        return '';
    }

    getType(): string {
        return NodeIdentifiers.FormListDataElementNodeIdentifier.type;
    }

    createDOM(): HTMLElement {
        const formListDataEl = document.createElement('li');
        formListDataEl.className = 'form-list-data';
        return formListDataEl;
    }

    updateDOM(): boolean {
        return true;
    }
}