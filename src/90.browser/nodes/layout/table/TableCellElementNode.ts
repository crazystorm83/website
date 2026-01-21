import { NodeIdentifiers } from "@types";
import { NHNode } from "../../../decorators";
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