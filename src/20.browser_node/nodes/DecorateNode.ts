import React from 'react';

import { throwException } from '@browser_foundation';
import { Node } from "@browser_infra";

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