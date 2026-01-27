import { NodeIdentifiers } from "@primitive_types";
import { NHNode } from "@browser_infra/decorators/NHNode";
import { ElementNode } from "../ElementNode";

@NHNode({
    identifier: NodeIdentifiers.InputElementNodeIdentifier,
})
export class InputElementNode extends ElementNode {
    buildCss(): string {
        const classNames = ['input'];
        return classNames.join(' ');
    }

    buildStyle(): string {
        return '';
    }

    getType(): string {
        return NodeIdentifiers.InputElementNodeIdentifier.type;
    }

    createDOM(): HTMLElement {
        const inputEl = document.createElement('input');
        inputEl.type = 'text';
        return inputEl;
    }

    updateDOM(): boolean {
        return true;
    }
}