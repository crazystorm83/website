import { NodeIdentifiers } from "@types";
import { NHNode } from "../../decorators";
import { ElementNode } from "../ElementNode";

@NHNode({
    identifier: NodeIdentifiers.ButtonGroupElementNodeIdentifier,
})
export class ButtonGroupElementNode extends ElementNode {
    buildCss(): string {
        const classNames = ['button-group'];
        return classNames.join(' ');
    }

    buildStyle(): string {
        return '';
    }

    getType(): string {
        return NodeIdentifiers.ButtonGroupElementNodeIdentifier.type;
    }

    createDOM(): HTMLElement {
        const buttonGroupEl = document.createElement('div');
        buttonGroupEl.className = 'button-group';
        return buttonGroupEl;
    }

    updateDOM(): boolean {
        return true;
    }
}