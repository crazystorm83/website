(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.primitive_types = {}));
})(this, (function (exports) { 'use strict';

    function createIdentifier(name) {
        return {
            type: name,
        };
    }

    const ButtonElementNodeEventHandlerIdentifier = createIdentifier('button_eventhandler');

    const InputElementNodeEventHandlerIdentifier = createIdentifier('input_eventhandler');

    const LabelElementNodeEventHandlerIdentifier = createIdentifier('label_eventhandler');

    var index$3 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        ButtonElementNodeEventHandlerIdentifier: ButtonElementNodeEventHandlerIdentifier,
        InputElementNodeEventHandlerIdentifier: InputElementNodeEventHandlerIdentifier,
        LabelElementNodeEventHandlerIdentifier: LabelElementNodeEventHandlerIdentifier
    });

    class EventHandler {
    }

    class BrowserEventHandler extends EventHandler {
    }

    var index$2 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        BrowserEventHandler: BrowserEventHandler,
        EventHandler: EventHandler
    });

    var index$1 = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    const ButtonElementNodeIdentifier = createIdentifier('button');

    const ButtonGroupElementNodeIdentifier = createIdentifier('button_group');

    const CodeElementNodeIdentifier = createIdentifier('code');

    const InputElementNodeIdentifier = createIdentifier('input');

    const LabelElementNodeIdentifier = createIdentifier('label');

    const RootElementNodeIdentifier = createIdentifier('root');

    const FormListDataElementNodeIdentifier = createIdentifier('li');

    const FormListElementNodeIdentifier = createIdentifier('ul');

    const FormListLabelElementNodeIdentifier = createIdentifier('li');

    const PanelElementNodeIdentifier = createIdentifier('panel');

    const TableCellElementNodeIdentifier = createIdentifier('td');

    const TableElementNodeIdentifier = createIdentifier('table');

    const TableRowElementNodeIdentifier = createIdentifier('tr');

    const TbodyElementNodeIdentifier = createIdentifier('tbody');

    const TfootElementNodeIdentifier = createIdentifier('tfoot');

    const TheadElementNodeIdentifier = createIdentifier('thead');

    const ToolbarElementNodeIdentifier = createIdentifier('toolbar');

    const PageElementNodeIdentifier = createIdentifier('page');

    var index = /*#__PURE__*/Object.freeze({
        __proto__: null,
        ButtonElementNodeIdentifier: ButtonElementNodeIdentifier,
        ButtonGroupElementNodeIdentifier: ButtonGroupElementNodeIdentifier,
        CodeElementNodeIdentifier: CodeElementNodeIdentifier,
        FormListDataElementNodeIdentifier: FormListDataElementNodeIdentifier,
        FormListElementNodeIdentifier: FormListElementNodeIdentifier,
        FormListLabelElementNodeIdentifier: FormListLabelElementNodeIdentifier,
        InputElementNodeIdentifier: InputElementNodeIdentifier,
        LabelElementNodeIdentifier: LabelElementNodeIdentifier,
        PageElementNodeIdentifier: PageElementNodeIdentifier,
        PanelElementNodeIdentifier: PanelElementNodeIdentifier,
        RootElementNodeIdentifier: RootElementNodeIdentifier,
        TableCellElementNodeIdentifier: TableCellElementNodeIdentifier,
        TableElementNodeIdentifier: TableElementNodeIdentifier,
        TableRowElementNodeIdentifier: TableRowElementNodeIdentifier,
        TbodyElementNodeIdentifier: TbodyElementNodeIdentifier,
        TfootElementNodeIdentifier: TfootElementNodeIdentifier,
        TheadElementNodeIdentifier: TheadElementNodeIdentifier,
        ToolbarElementNodeIdentifier: ToolbarElementNodeIdentifier
    });

    exports.EventDatas = index$1;
    exports.EventHandlers = index$2;
    exports.EventIdentifiers = index$3;
    exports.NodeIdentifiers = index;
    exports.createIdentifier = createIdentifier;

}));
//# sourceMappingURL=primitive_types.js.map
