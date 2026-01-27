import { NHNode } from "@browser_infra/decorators/NHNode";
import { NodeIdentifiers } from "@primitive_types";
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