import { NHNode } from "@browser_infra/decorators/NHNode";
import { NodeIdentifiers } from "@primitive_types";
import { ElementNode } from "../ElementNode";

@NHNode({
    identifier: NodeIdentifiers.PageElementNodeIdentifier,
})
export class PageElementNode extends ElementNode {
    buildCss(): string {
        const classNames = ['page'];

        return classNames.join(' ');
    }

    buildStyle(): string {
        return '';
    }

    createDOM(): HTMLElement {
        const pageEl = document.createElement('div');

        return pageEl;
    }

    updateDOM(): boolean {
        return true;
    }
}