(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.browser_node = {}, global.React));
})(this, (function (exports, React) { 'use strict';

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise, SuppressedError, Symbol, Iterator */


    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };

    function throwException(condition, message) {
        throw new Error(message);
    }

    class Register {
        __items = new Map();
        add(key, target) {
            this.__items.set(key, target);
        }
        get(key) {
            return this.__items.get(key);
        }
        getOrThrow(key) {
            const item = this.get(key);
            if (!item) {
                throwException(false, `Item with key ${key} not found`);
            }
            return item;
        }
        getAll() {
            return Array.from(this.__items.values());
        }
    }

    class Storage extends Register {
        _instances = new Map();
        add(key, target) {
            super.add(key, target);
        }
        get(key) {
            const item = super.get(key);
            if (!item)
                return undefined;
            if (this._instances.has(key)) {
                return this._instances.get(key);
            }
            const instance = new item();
            this._instances.set(key, instance);
            return instance;
        }
        getOrThrow(key) {
            const item = this.get(key);
            if (!item) {
                throwException(false, `Item with key ${key} not found`);
            }
            return item;
        }
    }

    class InstanceStorage extends Storage {
    }

    class NodeInstanceStorage extends InstanceStorage {
    }

    const nodeInstanceStorage = new NodeInstanceStorage();
    function NHNode({ identifier, }) {
        return (constructor) => {
            nodeInstanceStorage.add(identifier.type, constructor);
        };
    }

    const UIdMap = new Map();
    function createNodeSequentialUID() {
        const uidKey = 'node';
        return createSequentialUID(uidKey);
    }
    function createSequentialUID(uidKey) {
        const uid = UIdMap.get(uidKey) ?? 1;
        UIdMap.set(uidKey, uid + 1);
        return `${uidKey}-${uid}`;
    }

    class Node {
        __key;
        __parent;
        __prev;
        __next;
        __size = 0;
        //['constructor']!: KlassConstructor<typeof Node>;
        constructor(key) {
            this.__parent = null;
            this.__prev = null;
            this.__next = null;
            this.__key = key ?? createNodeSequentialUID();
        }
        _config;
        setConfig(config) {
            this._config = config;
        }
        createDOM() {
            throwException(false, 'createDOM must be implemented');
        }
        updateDOM() {
            throwException(false, 'updateDOM must be implemented');
        }
        $config() {
        }
    }

    function createIdentifier(name) {
        return {
            type: name,
        };
    }

    const ButtonElementNodeIdentifier = createIdentifier('button');

    const InputElementNodeIdentifier = createIdentifier('input');

    const LabelElementNodeIdentifier = createIdentifier('label');

    const RootElementNodeIdentifier = createIdentifier('root');

    const FormListDataElementNodeIdentifier = createIdentifier('li');

    const FormListElementNodeIdentifier = createIdentifier('ul');

    const FormListLabelElementNodeIdentifier = createIdentifier('li');

    const TableCellElementNodeIdentifier = createIdentifier('td');

    const TableElementNodeIdentifier = createIdentifier('table');

    const TableRowElementNodeIdentifier = createIdentifier('tr');

    const TbodyElementNodeIdentifier = createIdentifier('tbody');

    const TfootElementNodeIdentifier = createIdentifier('tfoot');

    const TheadElementNodeIdentifier = createIdentifier('thead');

    const ToolbarElementNodeIdentifier = createIdentifier('toolbar');

    const PageElementNodeIdentifier = createIdentifier('page');

    class ElementNode extends Node {
        // declare ['constructor']: KlassConstructor<typeof ElementNode>;
        _editor;
        constructor(editor, key) {
            super(key);
            this._editor = editor;
        }
        getChildren() {
            return [];
        }
        append(...nodes) {
            this.splice(this.__size, 0, nodes);
        }
        splice(start, deleteCount, nodes) {
            this.getChildren();
        }
        remove() {
        }
        insertBefore(node, before) {
        }
        insertAfter(node, after) {
        }
    }
    function $isElementNode(node) {
        return node instanceof ElementNode;
    }
    function $isNode(value) {
        return value instanceof Node;
    }

    exports.ButtonElementNode = class ButtonElementNode extends ElementNode {
        buildCss() {
            const classNames = ['button'];
            return classNames.join(' ');
        }
        buildStyle() {
            return '';
        }
        getType() {
            return ButtonElementNodeIdentifier.type;
        }
        createDOM() {
            const buttonEl = document.createElement('button');
            buttonEl.textContent = this._config?.state.display_name;
            return buttonEl;
        }
        updateDOM() {
            return true;
        }
    };
    exports.ButtonElementNode = __decorate([
        NHNode({
            identifier: ButtonElementNodeIdentifier,
        })
    ], exports.ButtonElementNode);

    exports.InputElementNode = class InputElementNode extends ElementNode {
        buildCss() {
            const classNames = ['input'];
            return classNames.join(' ');
        }
        buildStyle() {
            return '';
        }
        getType() {
            return InputElementNodeIdentifier.type;
        }
        createDOM() {
            const inputEl = document.createElement('input');
            inputEl.type = 'text';
            return inputEl;
        }
        updateDOM() {
            return true;
        }
    };
    exports.InputElementNode = __decorate([
        NHNode({
            identifier: InputElementNodeIdentifier,
        })
    ], exports.InputElementNode);

    exports.LabelElementNode = class LabelElementNode extends ElementNode {
        buildCss() {
            const classNames = ['label'];
            return classNames.join(' ');
        }
        buildStyle() {
            return '';
        }
        getType() {
            return LabelElementNodeIdentifier.type;
        }
        createDOM() {
            const labelEl = document.createElement('span');
            labelEl.textContent = this._config?.state.display_name;
            return labelEl;
        }
        updateDOM() {
            return true;
        }
    };
    exports.LabelElementNode = __decorate([
        NHNode({
            identifier: LabelElementNodeIdentifier,
        })
    ], exports.LabelElementNode);

    class DecorateNode extends Node {
        getType() {
            return 'decorate';
        }
        createDOM() {
            return document.createElement('div');
        }
        updateDOM() {
            return true;
        }
        decorate() {
            throwException(false, 'decorate must be implemented');
        }
    }

    exports.FormListElementNode = class FormListElementNode extends ElementNode {
        buildCss() {
            return '';
        }
        buildStyle() {
            return '';
        }
        getType() {
            return FormListElementNodeIdentifier.type;
        }
        createDOM() {
            const formListEl = document.createElement('ul');
            formListEl.className = 'form-list';
            return formListEl;
        }
        updateDOM() {
            return true;
        }
    };
    exports.FormListElementNode = __decorate([
        NHNode({
            identifier: FormListElementNodeIdentifier,
        })
    ], exports.FormListElementNode);

    exports.FormListDataElementNode = class FormListDataElementNode extends ElementNode {
        buildCss() {
            return '';
        }
        buildStyle() {
            return '';
        }
        getType() {
            return FormListDataElementNodeIdentifier.type;
        }
        createDOM() {
            const formListDataEl = document.createElement('li');
            formListDataEl.className = 'form-list-data';
            return formListDataEl;
        }
        updateDOM() {
            return true;
        }
    };
    exports.FormListDataElementNode = __decorate([
        NHNode({
            identifier: FormListDataElementNodeIdentifier,
        })
    ], exports.FormListDataElementNode);

    exports.FormListLabelElementNode = class FormListLabelElementNode extends ElementNode {
        buildCss() {
            return '';
        }
        buildStyle() {
            return '';
        }
        static getType() {
            return FormListLabelElementNodeIdentifier.type;
        }
        createDOM() {
            const formListLabelEl = document.createElement('li');
            formListLabelEl.className = 'form-list-label';
            return formListLabelEl;
        }
        updateDOM() {
            return true;
        }
    };
    exports.FormListLabelElementNode = __decorate([
        NHNode({
            identifier: FormListLabelElementNodeIdentifier,
        })
    ], exports.FormListLabelElementNode);

    exports.TableCellElementNode = class TableCellElementNode extends ElementNode {
        buildCss() {
            return '';
        }
        buildStyle() {
            return '';
        }
        getType() {
            return TableCellElementNodeIdentifier.type;
        }
        createDOM() {
            return document.createElement('td');
        }
        updateDOM() {
            return true;
        }
    };
    exports.TableCellElementNode = __decorate([
        NHNode({
            identifier: TableCellElementNodeIdentifier,
        })
    ], exports.TableCellElementNode);

    exports.TableElementNode = class TableElementNode extends ElementNode {
        buildCss() {
            return '';
        }
        buildStyle() {
            return '';
        }
        getType() {
            return TableElementNodeIdentifier.type;
        }
        createDOM() {
            return document.createElement('table');
        }
        updateDOM() {
            return true;
        }
    };
    exports.TableElementNode = __decorate([
        NHNode({
            identifier: TableElementNodeIdentifier,
        })
    ], exports.TableElementNode);

    exports.TableRowElementNode = class TableRowElementNode extends ElementNode {
        buildCss() {
            return '';
        }
        buildStyle() {
            return '';
        }
        getType() {
            return TableRowElementNodeIdentifier.type;
        }
        createDOM() {
            return document.createElement('tr');
        }
        updateDOM() {
            return true;
        }
    };
    exports.TableRowElementNode = __decorate([
        NHNode({
            identifier: TableRowElementNodeIdentifier,
        })
    ], exports.TableRowElementNode);

    exports.TbodyElementNode = class TbodyElementNode extends ElementNode {
        buildCss() {
            return '';
        }
        buildStyle() {
            return '';
        }
        getType() {
            return TbodyElementNodeIdentifier.type;
        }
        createDOM() {
            return document.createElement('tbody');
        }
        updateDOM() {
            return true;
        }
    };
    exports.TbodyElementNode = __decorate([
        NHNode({
            identifier: TbodyElementNodeIdentifier,
        })
    ], exports.TbodyElementNode);

    exports.TfootElementNode = class TfootElementNode extends ElementNode {
        buildCss() {
            return '';
        }
        buildStyle() {
            return '';
        }
        getType() {
            return TfootElementNodeIdentifier.type;
        }
        createDOM() {
            return document.createElement('tfoot');
        }
        updateDOM() {
            return true;
        }
    };
    exports.TfootElementNode = __decorate([
        NHNode({
            identifier: TfootElementNodeIdentifier,
        })
    ], exports.TfootElementNode);

    exports.TheadElementNode = class TheadElementNode extends ElementNode {
        buildCss() {
            return '';
        }
        buildStyle() {
            return '';
        }
        getType() {
            return TheadElementNodeIdentifier.type;
        }
        createDOM() {
            return document.createElement('thead');
        }
        updateDOM() {
            return true;
        }
    };
    exports.TheadElementNode = __decorate([
        NHNode({
            identifier: TheadElementNodeIdentifier,
        })
    ], exports.TheadElementNode);

    exports.ToolbarElementNode = class ToolbarElementNode extends ElementNode {
        buildCss() {
            return '';
        }
        buildStyle() {
            return '';
        }
        getType() {
            return ToolbarElementNodeIdentifier.type;
        }
        createDOM() {
            const toolbarEl = document.createElement('div');
            toolbarEl.className = 'toolbar';
            return toolbarEl;
        }
        updateDOM() {
            return true;
        }
    };
    exports.ToolbarElementNode = __decorate([
        NHNode({
            identifier: ToolbarElementNodeIdentifier,
        })
    ], exports.ToolbarElementNode);

    exports.PageElementNode = class PageElementNode extends ElementNode {
        buildCss() {
            const classNames = ['page'];
            return classNames.join(' ');
        }
        buildStyle() {
            return '';
        }
        createDOM() {
            const pageEl = document.createElement('div');
            return pageEl;
        }
        updateDOM() {
            return true;
        }
    };
    exports.PageElementNode = __decorate([
        NHNode({
            identifier: PageElementNodeIdentifier,
        })
    ], exports.PageElementNode);

    function InputReactDecoratorComponent(props) {
        return (React.createElement("input", { type: "text" }));
    }

    exports.RootNode = class RootNode extends ElementNode {
        buildCss() {
            return '';
        }
        buildStyle() {
            return '';
        }
        createDOM() {
            return document.createDocumentFragment();
            // return document.createElement('div');
        }
        updateDOM() {
            return true;
        }
    };
    exports.RootNode = __decorate([
        NHNode({
            identifier: RootElementNodeIdentifier,
        })
    ], exports.RootNode);

    exports.$isElementNode = $isElementNode;
    exports.$isNode = $isNode;
    exports.DecorateNode = DecorateNode;
    exports.ElementNode = ElementNode;
    exports.InputReactDecoratorComponent = InputReactDecoratorComponent;

}));
//# sourceMappingURL=browser_node.js.map
