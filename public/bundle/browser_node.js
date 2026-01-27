"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp(target, key, result);
    return result;
  };

  // ../02.foundation/utils/createUID.ts
  var UIdMap = /* @__PURE__ */ new Map();
  function createNodeSequentialUID() {
    const uidKey = "node";
    return createSequentialUID(uidKey);
  }
  function createSequentialUID(uidKey) {
    const uid = UIdMap.get(uidKey) ?? 1;
    UIdMap.set(uidKey, uid + 1);
    return `${uidKey}-${uid}`;
  }

  // ../05.browser_foundation/exception/ThrowException.ts
  function throwException(condition, message) {
    if (condition) {
      return;
    }
    throw new Error(message);
  }

  // ../10.browser_infra/nodes/Node.ts
  var Node = class {
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
      throwException(false, "createDOM must be implemented");
    }
    updateDOM() {
      throwException(false, "updateDOM must be implemented");
    }
    $config() {
    }
  };
  function createCommand(type) {
    return { type };
  }

  // ../01.primitive_types/common/Identifier.ts
  function createIdentifier(name) {
    return {
      type: name
    };
  }

  // ../01.primitive_types/events/01.identifiers/ButtonElementNodeEventHandlerIdentifier.ts
  var ButtonElementNodeEventHandlerIdentifier = createIdentifier("button_eventhandler");

  // ../01.primitive_types/events/01.identifiers/InputElementNodeEventHandlerIdentifier.ts
  var InputElementNodeEventHandlerIdentifier = createIdentifier("input_eventhandler");

  // ../01.primitive_types/events/01.identifiers/LabelElementNodeEventHandlerIdentifier.ts
  var LabelElementNodeEventHandlerIdentifier = createIdentifier("label_eventhandler");

  // ../01.primitive_types/nodes/01.identifiers/index.ts
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

  // ../01.primitive_types/nodes/01.identifiers/ButtonElementNodeIdentifier.ts
  var ButtonElementNodeIdentifier = createIdentifier("button");

  // ../01.primitive_types/nodes/01.identifiers/ButtonGroupElementNodeIdentifier.ts
  var ButtonGroupElementNodeIdentifier = createIdentifier("button_group");

  // ../01.primitive_types/nodes/01.identifiers/InputElementNodeIdentifier.ts
  var InputElementNodeIdentifier = createIdentifier("input");

  // ../01.primitive_types/nodes/01.identifiers/LabelElementNodeIdentifier.ts
  var LabelElementNodeIdentifier = createIdentifier("label");

  // ../01.primitive_types/nodes/01.identifiers/element/RootElementNodeIdentifier.ts
  var RootElementNodeIdentifier = createIdentifier("root");

  // ../01.primitive_types/nodes/01.identifiers/layout/form/FormListDataElementNodeIdentifier.ts
  var FormListDataElementNodeIdentifier = createIdentifier("li");

  // ../01.primitive_types/nodes/01.identifiers/layout/form/FormListElementNodeIdentifier.ts
  var FormListElementNodeIdentifier = createIdentifier("ul");

  // ../01.primitive_types/nodes/01.identifiers/layout/form/FormListLabelElementNodeIdentifier.ts
  var FormListLabelElementNodeIdentifier = createIdentifier("li");

  // ../01.primitive_types/nodes/01.identifiers/layout/panel/PanelElementNodeIndeitifer.ts
  var PanelElementNodeIdentifier = createIdentifier("panel");

  // ../01.primitive_types/nodes/01.identifiers/layout/table/TableCellElementNodeIdentifier.ts
  var TableCellElementNodeIdentifier = createIdentifier("td");

  // ../01.primitive_types/nodes/01.identifiers/layout/table/TableElementNodeIdentifier.ts
  var TableElementNodeIdentifier = createIdentifier("table");

  // ../01.primitive_types/nodes/01.identifiers/layout/table/TableRowElementNodeIdentifier.ts
  var TableRowElementNodeIdentifier = createIdentifier("tr");

  // ../01.primitive_types/nodes/01.identifiers/layout/table/TbodyElementNodeIdentifier.ts
  var TbodyElementNodeIdentifier = createIdentifier("tbody");

  // ../01.primitive_types/nodes/01.identifiers/layout/table/TfootElementNodeIdentifier.ts
  var TfootElementNodeIdentifier = createIdentifier("tfoot");

  // ../01.primitive_types/nodes/01.identifiers/layout/table/TheadElementNodeIdentifier.ts
  var TheadElementNodeIdentifier = createIdentifier("thead");

  // ../01.primitive_types/nodes/01.identifiers/layout/toolbar/ToolbarElementNodeIdentifier.ts
  var ToolbarElementNodeIdentifier = createIdentifier("toolbar");

  // ../01.primitive_types/nodes/01.identifiers/page/PageElementNodeIdentifier.ts
  var PageElementNodeIdentifier = createIdentifier("page");

  // ../05.browser_foundation/data/Register.ts
  var Register = class {
    __items = /* @__PURE__ */ new Map();
    add(key, target) {
      this.__items.set(key, target);
    }
    get(type) {
      return this.__items.get(type);
    }
    getOrThrow(type) {
      const item = this.get(type);
      if (!item) {
        throwException(false, `Item with type ${type} not found`);
      }
      return item;
    }
    getAll() {
      return Array.from(this.__items.values());
    }
  };

  // ../05.browser_foundation/data/storage/Storage.ts
  var Storage = class extends Register {
    _instances = /* @__PURE__ */ new Map();
    add(key, target) {
      super.add(key, target);
    }
    get(key) {
      const item = super.get(key);
      if (!item) return void 0;
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
      if (this._instances.has(key)) {
        return this._instances.get(key);
      }
      const instance = new item();
      this._instances.set(key, instance);
      return instance;
    }
  };

  // ../05.browser_foundation/data/storage/InstanceStorage.ts
  var InstanceStorage = class extends Storage {
  };

  // ../10.browser_infra/datas/NodeInstanceStorage.ts
  var NodeInstanceStorage = class extends InstanceStorage {
  };

  // ../10.browser_infra/decorators/NHNode.ts
  var nodeInstanceStorage = new NodeInstanceStorage();
  function NHNode({
    identifier
  }) {
    return (constructor) => {
      nodeInstanceStorage.add(identifier.type, constructor);
    };
  }

  // nodes/ElementNode.ts
  var ElementNode = class extends Node {
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
  };
  function $isElementNode(node) {
    return node instanceof ElementNode;
  }
  function $isNode(value) {
    return value instanceof Node;
  }

  // nodes/component/ButtonElementNode.ts
  var ButtonElementNode = class extends ElementNode {
    buildCss() {
      const classNames = ["button"];
      return classNames.join(" ");
    }
    buildStyle() {
      return "";
    }
    getType() {
      return __exports3.ButtonElementNodeIdentifier.type;
    }
    createDOM() {
      const buttonEl = document.createElement("button");
      buttonEl.textContent = this._config?.state.display_name;
      return buttonEl;
    }
    updateDOM() {
      return true;
    }
  };
  ButtonElementNode = __decorateClass([
    NHNode({
      identifier: __exports3.ButtonElementNodeIdentifier
    })
  ], ButtonElementNode);

  // nodes/component/InputElementNode.ts
  var InputElementNode = class extends ElementNode {
    buildCss() {
      const classNames = ["input"];
      return classNames.join(" ");
    }
    buildStyle() {
      return "";
    }
    getType() {
      return __exports3.InputElementNodeIdentifier.type;
    }
    createDOM() {
      const inputEl = document.createElement("input");
      inputEl.type = "text";
      return inputEl;
    }
    updateDOM() {
      return true;
    }
  };
  InputElementNode = __decorateClass([
    NHNode({
      identifier: __exports3.InputElementNodeIdentifier
    })
  ], InputElementNode);

  // nodes/component/LabelElementNode.ts
  var LabelElementNode = class extends ElementNode {
    buildCss() {
      const classNames = ["label"];
      return classNames.join(" ");
    }
    buildStyle() {
      return "";
    }
    getType() {
      return __exports3.LabelElementNodeIdentifier.type;
    }
    createDOM() {
      const labelEl = document.createElement("span");
      labelEl.textContent = this._config?.state.display_name;
      return labelEl;
    }
    updateDOM() {
      return true;
    }
  };
  LabelElementNode = __decorateClass([
    NHNode({
      identifier: __exports3.LabelElementNodeIdentifier
    })
  ], LabelElementNode);

  // nodes/DecorateNode.ts
  var DecorateNode = class extends Node {
    getType() {
      return "decorate";
    }
    createDOM() {
      return document.createElement("div");
    }
    updateDOM() {
      return true;
    }
    decorate() {
      throwException(false, "decorate must be implemented");
    }
  };

  // nodes/layout/form/list.ts
  var FormListElementNode = class extends ElementNode {
    buildCss() {
      return "";
    }
    buildStyle() {
      return "";
    }
    getType() {
      return __exports3.FormListElementNodeIdentifier.type;
    }
    createDOM() {
      const formListEl = document.createElement("ul");
      formListEl.className = "form-list";
      return formListEl;
    }
    updateDOM() {
      return true;
    }
  };
  FormListElementNode = __decorateClass([
    NHNode({
      identifier: __exports3.FormListElementNodeIdentifier
    })
  ], FormListElementNode);

  // nodes/layout/form/listData.ts
  var FormListDataElementNode = class extends ElementNode {
    buildCss() {
      return "";
    }
    buildStyle() {
      return "";
    }
    getType() {
      return __exports3.FormListDataElementNodeIdentifier.type;
    }
    createDOM() {
      const formListDataEl = document.createElement("li");
      formListDataEl.className = "form-list-data";
      return formListDataEl;
    }
    updateDOM() {
      return true;
    }
  };
  FormListDataElementNode = __decorateClass([
    NHNode({
      identifier: __exports3.FormListDataElementNodeIdentifier
    })
  ], FormListDataElementNode);

  // nodes/layout/form/listLabel.ts
  var FormListLabelElementNode = class extends ElementNode {
    buildCss() {
      return "";
    }
    buildStyle() {
      return "";
    }
    static getType() {
      return __exports3.FormListLabelElementNodeIdentifier.type;
    }
    createDOM() {
      const formListLabelEl = document.createElement("li");
      formListLabelEl.className = "form-list-label";
      return formListLabelEl;
    }
    updateDOM() {
      return true;
    }
  };
  FormListLabelElementNode = __decorateClass([
    NHNode({
      identifier: __exports3.FormListLabelElementNodeIdentifier
    })
  ], FormListLabelElementNode);

  // nodes/layout/table/TableCellElementNode.ts
  var TableCellElementNode = class extends ElementNode {
    buildCss() {
      return "";
    }
    buildStyle() {
      return "";
    }
    getType() {
      return __exports3.TableCellElementNodeIdentifier.type;
    }
    createDOM() {
      return document.createElement("td");
    }
    updateDOM() {
      return true;
    }
  };
  TableCellElementNode = __decorateClass([
    NHNode({
      identifier: __exports3.TableCellElementNodeIdentifier
    })
  ], TableCellElementNode);

  // nodes/layout/table/TableElementNode.ts
  var TableElementNode = class extends ElementNode {
    buildCss() {
      return "";
    }
    buildStyle() {
      return "";
    }
    getType() {
      return __exports3.TableElementNodeIdentifier.type;
    }
    createDOM() {
      return document.createElement("table");
    }
    updateDOM() {
      return true;
    }
  };
  TableElementNode = __decorateClass([
    NHNode({
      identifier: __exports3.TableElementNodeIdentifier
    })
  ], TableElementNode);

  // nodes/layout/table/TableRowElementNode.ts
  var TableRowElementNode = class extends ElementNode {
    buildCss() {
      return "";
    }
    buildStyle() {
      return "";
    }
    getType() {
      return __exports3.TableRowElementNodeIdentifier.type;
    }
    createDOM() {
      return document.createElement("tr");
    }
    updateDOM() {
      return true;
    }
  };
  TableRowElementNode = __decorateClass([
    NHNode({
      identifier: __exports3.TableRowElementNodeIdentifier
    })
  ], TableRowElementNode);

  // nodes/layout/table/TbodyElementNode.ts
  var TbodyElementNode = class extends ElementNode {
    buildCss() {
      return "";
    }
    buildStyle() {
      return "";
    }
    getType() {
      return __exports3.TbodyElementNodeIdentifier.type;
    }
    createDOM() {
      return document.createElement("tbody");
    }
    updateDOM() {
      return true;
    }
  };
  TbodyElementNode = __decorateClass([
    NHNode({
      identifier: __exports3.TbodyElementNodeIdentifier
    })
  ], TbodyElementNode);

  // nodes/layout/table/TfootElementNode.ts
  var TfootElementNode = class extends ElementNode {
    buildCss() {
      return "";
    }
    buildStyle() {
      return "";
    }
    getType() {
      return __exports3.TfootElementNodeIdentifier.type;
    }
    createDOM() {
      return document.createElement("tfoot");
    }
    updateDOM() {
      return true;
    }
  };
  TfootElementNode = __decorateClass([
    NHNode({
      identifier: __exports3.TfootElementNodeIdentifier
    })
  ], TfootElementNode);

  // nodes/layout/table/TheadElementNode.ts
  var TheadElementNode = class extends ElementNode {
    buildCss() {
      return "";
    }
    buildStyle() {
      return "";
    }
    getType() {
      return __exports3.TheadElementNodeIdentifier.type;
    }
    createDOM() {
      return document.createElement("thead");
    }
    updateDOM() {
      return true;
    }
  };
  TheadElementNode = __decorateClass([
    NHNode({
      identifier: __exports3.TheadElementNodeIdentifier
    })
  ], TheadElementNode);

  // nodes/layout/toolbar/toolbar.ts
  var ToolbarElementNode = class extends ElementNode {
    buildCss() {
      return "";
    }
    buildStyle() {
      return "";
    }
    getType() {
      return __exports3.ToolbarElementNodeIdentifier.type;
    }
    createDOM() {
      const toolbarEl = document.createElement("div");
      toolbarEl.className = "toolbar";
      return toolbarEl;
    }
    updateDOM() {
      return true;
    }
  };
  ToolbarElementNode = __decorateClass([
    NHNode({
      identifier: __exports3.ToolbarElementNodeIdentifier
    })
  ], ToolbarElementNode);

  // nodes/RootNode.ts
  var RootNode = class extends ElementNode {
    buildCss() {
      return "";
    }
    buildStyle() {
      return "";
    }
    createDOM() {
      return document.createDocumentFragment();
    }
    updateDOM() {
      return true;
    }
  };
  RootNode = __decorateClass([
    NHNode({
      identifier: __exports3.RootElementNodeIdentifier
    })
  ], RootNode);
})();
//# sourceMappingURL=browser_node.js.map
