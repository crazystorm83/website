import { NodeIdentifiers } from "@types";
import { NHNode } from "../../../decorators";
import { ElementNode } from "../../ElementNode";

@NHNode({
    identifier: NodeIdentifiers.ToolbarElementNodeIdentifier,
})
export class ToolbarElementNode extends ElementNode {
    buildCss(): string {
        return '';
    }

    buildStyle(): string {
        return '';
    }

    getType(): string {
        return NodeIdentifiers.ToolbarElementNodeIdentifier.type;
    }

    createDOM(): HTMLElement {
        const toolbarEl = document.createElement('div');
        toolbarEl.className = 'toolbar';
        return toolbarEl;
    }

    updateDOM(): boolean {
        return true;
    }
}