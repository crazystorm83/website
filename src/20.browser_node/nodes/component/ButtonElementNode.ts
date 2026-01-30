import { NHNode } from "@browser_infra";
import { NodeIdentifiers } from "@primitive_types";
import { ElementNode } from "../ElementNode";

@NHNode({
    identifier: NodeIdentifiers.ButtonElementNodeIdentifier,
})
export class ButtonElementNode extends ElementNode {
    buildCss(): string {
        const classNames = ['button'];
        return classNames.join(' ');
    }

    buildStyle(): string {
        return '';
    }

    getType(): string {
        return NodeIdentifiers.ButtonElementNodeIdentifier.type;
    }

    createDOM(): HTMLElement {
        const buttonEl = document.createElement('button');
        buttonEl.textContent = this._config?.state.display_name;
        return buttonEl;
    }

    updateDOM(): boolean {
        return true;
    }
}