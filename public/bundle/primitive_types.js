"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // common/Identifier.ts
  function createIdentifier(name) {
    return {
      type: name
    };
  }

  // events/01.identifiers/index.ts
  var __exports = {};
  __export(__exports, {
    ButtonElementNodeEventHandlerIdentifier: () => ButtonElementNodeEventHandlerIdentifier,
    InputElementNodeEventHandlerIdentifier: () => InputElementNodeEventHandlerIdentifier,
    LabelElementNodeEventHandlerIdentifier: () => LabelElementNodeEventHandlerIdentifier
  });

  // events/01.identifiers/ButtonElementNodeEventHandlerIdentifier.ts
  var ButtonElementNodeEventHandlerIdentifier = createIdentifier("button_eventhandler");

  // events/01.identifiers/InputElementNodeEventHandlerIdentifier.ts
  var InputElementNodeEventHandlerIdentifier = createIdentifier("input_eventhandler");

  // events/01.identifiers/LabelElementNodeEventHandlerIdentifier.ts
  var LabelElementNodeEventHandlerIdentifier = createIdentifier("label_eventhandler");

  // events/10.handlers/index.ts
  var __exports2 = {};
  __export(__exports2, {
    BrowserEventHandler: () => BrowserEventHandler,
    EventHandler: () => EventHandler
  });

  // events/10.handlers/EventHandler.ts
  var EventHandler = class {
  };

  // events/10.handlers/BrowserEventHandler.ts
  var BrowserEventHandler = class extends EventHandler {
  };

  // nodes/01.identifiers/index.ts
  var __exports3 = {};
  __export(__exports3, {
    ButtonElementNodeIdentifier: () => ButtonElementNodeIdentifier,
    ButtonGroupElementNodeIdentifier: () => ButtonGroupElementNodeIdentifier,
    FormListDataElementNodeIdentifier: () => FormListDataElementNodeIdentifier,
    FormListElementNodeIdentifier: () => FormListElementNodeIdentifier,
    FormListLabelElementNodeIdentifier: () => FormListLabelElementNodeIdentifier,
    InputElementNodeIdentifier: () => InputElementNodeIdentifier,
    LabelElementNodeIdentifier: () => LabelElementNodeIdentifier,
    PageElementNodeIdentifier: () => PageElementNodeIdentifier,
    PanelElementNodeIdentifier: () => PanelElementNodeIdentifier,
    RootElementNodeIdentifier: () => RootElementNodeIdentifier,
    TableCellElementNodeIdentifier: () => TableCellElementNodeIdentifier,
    TableElementNodeIdentifier: () => TableElementNodeIdentifier,
    TableRowElementNodeIdentifier: () => TableRowElementNodeIdentifier,
    TbodyElementNodeIdentifier: () => TbodyElementNodeIdentifier,
    TfootElementNodeIdentifier: () => TfootElementNodeIdentifier,
    TheadElementNodeIdentifier: () => TheadElementNodeIdentifier,
    ToolbarElementNodeIdentifier: () => ToolbarElementNodeIdentifier
  });

  // nodes/01.identifiers/ButtonElementNodeIdentifier.ts
  var ButtonElementNodeIdentifier = createIdentifier("button");

  // nodes/01.identifiers/ButtonGroupElementNodeIdentifier.ts
  var ButtonGroupElementNodeIdentifier = createIdentifier("button_group");

  // nodes/01.identifiers/InputElementNodeIdentifier.ts
  var InputElementNodeIdentifier = createIdentifier("input");

  // nodes/01.identifiers/LabelElementNodeIdentifier.ts
  var LabelElementNodeIdentifier = createIdentifier("label");

  // nodes/01.identifiers/element/RootElementNodeIdentifier.ts
  var RootElementNodeIdentifier = createIdentifier("root");

  // nodes/01.identifiers/layout/form/FormListDataElementNodeIdentifier.ts
  var FormListDataElementNodeIdentifier = createIdentifier("li");

  // nodes/01.identifiers/layout/form/FormListElementNodeIdentifier.ts
  var FormListElementNodeIdentifier = createIdentifier("ul");

  // nodes/01.identifiers/layout/form/FormListLabelElementNodeIdentifier.ts
  var FormListLabelElementNodeIdentifier = createIdentifier("li");

  // nodes/01.identifiers/layout/panel/PanelElementNodeIndeitifer.ts
  var PanelElementNodeIdentifier = createIdentifier("panel");

  // nodes/01.identifiers/layout/table/TableCellElementNodeIdentifier.ts
  var TableCellElementNodeIdentifier = createIdentifier("td");

  // nodes/01.identifiers/layout/table/TableElementNodeIdentifier.ts
  var TableElementNodeIdentifier = createIdentifier("table");

  // nodes/01.identifiers/layout/table/TableRowElementNodeIdentifier.ts
  var TableRowElementNodeIdentifier = createIdentifier("tr");

  // nodes/01.identifiers/layout/table/TbodyElementNodeIdentifier.ts
  var TbodyElementNodeIdentifier = createIdentifier("tbody");

  // nodes/01.identifiers/layout/table/TfootElementNodeIdentifier.ts
  var TfootElementNodeIdentifier = createIdentifier("tfoot");

  // nodes/01.identifiers/layout/table/TheadElementNodeIdentifier.ts
  var TheadElementNodeIdentifier = createIdentifier("thead");

  // nodes/01.identifiers/layout/toolbar/ToolbarElementNodeIdentifier.ts
  var ToolbarElementNodeIdentifier = createIdentifier("toolbar");

  // nodes/01.identifiers/page/PageElementNodeIdentifier.ts
  var PageElementNodeIdentifier = createIdentifier("page");
})();
//# sourceMappingURL=primitive_types.js.map
