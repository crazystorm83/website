import { NodeIdentifiers } from "@primitive_types";
import { NHNode } from "@browser_infra/decorators/NHNode";
import { ElementNode } from "../../ElementNode";

@NHNode({
    identifier: NodeIdentifiers.TableRowElementNodeIdentifier,
})
export class TableRowElementNode extends ElementNode {
    buildCss(): string {
        return '';
    }

    buildStyle(): string {
        return '';
    }

    getType(): string {
        return NodeIdentifiers.TableRowElementNodeIdentifier.type;
    }

    createDOM(): HTMLElement {
        return document.createElement('tr');
    }

    updateDOM(): boolean {
        return true;
    }
}