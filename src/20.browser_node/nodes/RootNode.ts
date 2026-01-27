import { NHNode } from "@browser_infra/decorators/NHNode";
import { NodeIdentifiers } from "@primitive_types";
import { ElementNode } from "./ElementNode";

@NHNode({
    identifier: NodeIdentifiers.RootElementNodeIdentifier,
})
export class RootNode extends ElementNode {
    buildCss(): string {
        return '';
    }

    buildStyle(): string {
        return '';
    }

    createDOM() {
        return document.createDocumentFragment();

        // return document.createElement('div');
    }

    updateDOM() {
        return true;
    }
}