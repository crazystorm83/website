import React from 'react';

import { throwException } from '../../01.browser_foundation/@types/exception/ThrowException';
import { Node } from "./Node";

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