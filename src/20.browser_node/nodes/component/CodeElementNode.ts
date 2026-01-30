import { NHNode } from "@browser_infra/decorators/NHNode";
import { NodeIdentifiers } from "@primitive_types";
import { ElementNode } from "../ElementNode";

@NHNode({
    identifier: NodeIdentifiers.CodeElementNodeIdentifier,
})
export class CodeElementNode extends ElementNode {
    buildCss(): string {
        const classNames = ['code'];
        return classNames.join(' ');
    }

    buildStyle(): string {
        return '';
    }

    getType(): string {
        return NodeIdentifiers.CodeElementNodeIdentifier.type;
    }

    createDOM(): HTMLElement {
        const containerEl = document.createElement('div');
        containerEl.className = 'code';



        return containerEl;
    }

    updateDOM(): boolean {
        return false;
    }
}