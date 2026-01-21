import { NodeIdentifiers } from "@types";
import { NHNode } from "../../../decorators";
import { ElementNode } from "../../ElementNode";

@NHNode({
    identifier: NodeIdentifiers.TableElementNodeIdentifier,
})
export class TableElementNode extends ElementNode {
    buildCss(): string {
        return '';
    }

    buildStyle(): string {
        return '';
    }

    getType(): string {
        return NodeIdentifiers.TableElementNodeIdentifier.type;
    }

    createDOM(): HTMLElement {
        return document.createElement('table');
    }

    updateDOM(): boolean {
        return true;
    }
}