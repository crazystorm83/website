import React from 'react';

import { throwException } from '../../05.browser_foundation/exception/ThrowException';
import { Node } from "../../10.browser_infra/nodes/Node";

export class DecorateNode extends Node {
    getType(): string {
        return 'decorate';
    }

    createDOM(): HTMLElement {
        return document.createElement('div');
    }

    updateDOM(): boolean {
        return true;
    }

    decorate(): React.JSX.Element {
        throwException(false, 'decorate must be implemented');
    }
}