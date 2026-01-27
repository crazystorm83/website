import { NodeIdentifiers } from "@primitive_types";
import { NHNode } from "@browser_infra/decorators/NHNode";
import { ElementNode } from "../../ElementNode";

@NHNode({
    identifier: NodeIdentifiers.TableCellElementNodeIdentifier,
})
export class TableCellElementNode extends ElementNode {
    buildCss(): string {
        return '';
    }

    buildStyle(): string {
        return '';
    }

    getType(): string {
        return NodeIdentifiers.TableCellElementNodeIdentifier.type;
    }

    createDOM(): HTMLElement {
        return document.createElement('td');
    }

    updateDOM(): boolean {
        return true;
    }
}