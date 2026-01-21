import { NodeIdentifiers } from "@types";
import { NHNode } from "../../decorators";
import { ElementNode } from "../ElementNode";

@NHNode({
    identifier: NodeIdentifiers.LabelElementNodeIdentifier,
})
export class LabelElementNode extends ElementNode {
    buildCss(): string {
        const classNames = ['label'];
        return classNames.join(' ');
    }

    buildStyle(): string {
        return '';
    }

    getType(): string {
        return NodeIdentifiers.LabelElementNodeIdentifier.type;
    }

    createDOM(): HTMLElement {
        const labelEl = document.createElement('span');
        labelEl.textContent = this._config?.state.display_name;
        return labelEl;
    }

    updateDOM(): boolean {
        return true;
    }
}
