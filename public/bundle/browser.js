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

  // ../01.primitive_types/events/10.handlers/index.ts
  var __exports = {};
  __export(__exports, {
    BrowserEventHandler: () => BrowserEventHandler,
    EventHandler: () => EventHandler
  });

  // ../01.primitive_types/events/10.handlers/EventHandler.ts
  var EventHandler = class {
  };

  // ../01.primitive_types/events/10.handlers/BrowserEventHandler.ts
  var BrowserEventHandler = class extends EventHandler {
  };

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

  // ../05.browser_foundation/exception/ThrowException.ts
  function throwException(condition, message) {
    if (condition) {
      return;
    }
    throw new Error(message);
  }

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

  // ../10.browser_infra/datas/EventInstanceStorage.ts
  var EventInstanceStorage = class extends InstanceStorage {
  };

  // ../10.browser_infra/decorators/NHEventHandler.ts
  var eventInstanceStorage = new EventInstanceStorage();
  function NHEventHandler({
    nodeIdentifier
  }) {
    return function(constructor) {
      eventInstanceStorage.add(nodeIdentifier.type, constructor);
    };
  }

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

  // ../02.foundation/utils/createUID.ts
  var UIdMap = /* @__PURE__ */ new Map();
  function createNodeSequentialUID() {
    const uidKey = "node";
    return createSequentialUID(uidKey);
  }
  function createEditorSequentialUID() {
    const uidKey = "editor";
    return createSequentialUID(uidKey);
  }
  function createSequentialUID(uidKey) {
    const uid = UIdMap.get(uidKey) ?? 1;
    UIdMap.set(uidKey, uid + 1);
    return `${uidKey}-${uid}`;
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

  // events/01.handler/10.component/ElementNodeEventHandler.ts
  var ElementNodeEventHandler = class extends __exports.BrowserEventHandler {
    handleMouseEvent(event) {
      throw new Error("Method not implemented.");
    }
    handleKeyboardEvent(event) {
      throw new Error("Method not implemented.");
    }
    handleTouchEvent(event) {
      throw new Error("Method not implemented.");
    }
    handleWheelEvent(event) {
      throw new Error("Method not implemented.");
    }
    handleFocusEvent(event) {
      throw new Error("Method not implemented.");
    }
    handleBlurEvent(event) {
      throw new Error("Method not implemented.");
    }
    handleChangeEvent(event) {
      throw new Error("Method not implemented.");
    }
    handleSubmitEvent(event) {
      throw new Error("Method not implemented.");
    }
    handleResetEvent(event) {
      throw new Error("Method not implemented.");
    }
    handleDragEvent(event) {
      throw new Error("Method not implemented.");
    }
    handleDropEvent(event) {
      throw new Error("Method not implemented.");
    }
    handleScrollEvent(event) {
      throw new Error("Method not implemented.");
    }
  };

  // events/01.handler/10.component/ButtonElementNodeEventHandler.ts
  var ButtonElementNodeEventHandler = class extends ElementNodeEventHandler {
    getType() {
      return __exports3.ButtonElementNodeIdentifier.type;
    }
  };
  ButtonElementNodeEventHandler = __decorateClass([
    NHEventHandler({
      nodeIdentifier: __exports3.ButtonElementNodeIdentifier
    })
  ], ButtonElementNodeEventHandler);

  // events/01.handler/10.component/InputElementNodeEventHandler.ts
  var InputElementNodeEventHandler = class extends ElementNodeEventHandler {
    getType() {
      return __exports3.InputElementNodeIdentifier.type;
    }
  };
  InputElementNodeEventHandler = __decorateClass([
    NHEventHandler({
      nodeIdentifier: __exports3.InputElementNodeIdentifier
    })
  ], InputElementNodeEventHandler);

  // events/01.handler/10.component/LabelElementNodeEventHandler.ts
  var LabelElementNodeEventHandler = class extends ElementNodeEventHandler {
    getType() {
      return __exports3.LabelElementNodeIdentifier.type;
    }
  };
  LabelElementNodeEventHandler = __decorateClass([
    NHEventHandler({
      nodeIdentifier: __exports3.LabelElementNodeIdentifier
    })
  ], LabelElementNodeEventHandler);

  // events/NodeEvent.ts
  function blurActiveElement() {
    document.activeElement?.blur();
  }
  var rootElementEventListeners = [
    ["keydown", (event) => {
      blurActiveElement();
      queueMicrotask(() => {
        console.log("keydown");
        console.log(event);
      });
    }],
    ["pointerdown", (event) => {
      blurActiveElement();
      queueMicrotask(() => {
        console.log("pointerdown");
        console.log(event);
      });
    }],
    ["compositionstart", (event) => {
      console.log("compositionstart");
      console.log(event);
    }],
    // ['compositionupdate', (event: CompositionEvent) => {
    //     console.log(event);
    // }],
    ["compositionend", (event) => {
      console.log("compositionend");
      console.log(event);
    }],
    ["input", (event) => {
      console.log("input");
      console.log(event);
    }],
    ["click", (event) => {
      console.log("click");
      console.log(event);
    }],
    ["cut", (event) => {
      console.log("cut");
      console.log(event);
    }],
    ["copy", (event) => {
      console.log("copy");
      console.log(event);
    }],
    ["dragstart", (event) => {
      console.log("dragstart");
      console.log(event);
    }],
    ["dragover", (event) => {
      console.log("dragover");
      console.log(event);
    }],
    ["dragend", (event) => {
      console.log("dragend");
      console.log(event);
    }],
    ["paste", (event) => {
      console.log("paste");
      console.log(event);
    }],
    ["blur", (event) => {
      console.log("blur");
      console.log(event);
    }],
    ["focus", (event) => {
      console.log("focus");
      console.log(event);
    }],
    ["drop", (event) => {
      console.log("drop");
      console.log(event);
    }]
  ];
  function addRootElementEventListeners(rootEl2, ignoreEvents) {
    const destoryEventListeners = [];
    for (const [eventName, handler] of rootElementEventListeners) {
      if (ignoreEvents.includes(eventName)) continue;
      rootEl2.addEventListener(eventName, handler);
      destoryEventListeners.push(() => {
        rootEl2.removeEventListener(eventName, handler);
      });
    }
    return destoryEventListeners;
  }

  // performance/PerformanceMonitor.ts
  var PerformanceMonitor = class _PerformanceMonitor {
    static instances = /* @__PURE__ */ new WeakMap();
    static globalMetrics = /* @__PURE__ */ new Map();
    static config = {
      enabled: true,
      threshold: 0,
      sampleRate: 1,
      maxHistorySize: 100,
      logToConsole: true,
      exclude: ["constructor", "toString", "valueOf"]
    };
    /**
     * 전역 설정 변경
     */
    static configure(options) {
      this.config = { ...this.config, ...options };
    }
    static wrap(target) {
      if (typeof target === "function") {
        return this.wrapClass(target);
      }
      return this.wrapInstance(target);
    }
    /**
     * 클래스 래핑
     * @param klass - 클래스 객체
     * @returns - 래핑된 클래스 객체
     */
    static wrapClass(klass) {
      if (!this.config.enabled) return klass;
      const monitor = this;
      return class extends klass {
        constructor(...args) {
          super(...args);
          return monitor.wrapInstance(this);
        }
      };
    }
    /**
     * 인스턴스 래핑
     * @param instance - 인스턴스 객체
     * @returns - 래핑된 인스턴스 객체
     */
    static wrapInstance(instance) {
      if (!this.config.enabled) return instance;
      if (this.instances.has(instance)) return this.instances.get(instance);
      const className = instance.constructor.name;
      const wrapped = new Proxy(instance, {
        get: (target, prop) => {
          const value = target[prop];
          if (typeof value !== "function" || typeof prop === "symbol" || _PerformanceMonitor.config.exclude.includes(prop) || prop.startsWith("_")) {
            return value;
          }
          return function(...args) {
            if (Math.random() > _PerformanceMonitor.config.sampleRate) {
              return value.apply(this, args);
            }
            const key = `${className}.${prop}`;
            const start = performance.now();
            try {
              const result = value.apply(this, args);
              if (result instanceof Promise) {
                return result.finally(() => {
                  _PerformanceMonitor.record(key, performance.now() - start);
                });
              }
              _PerformanceMonitor.record(key, performance.now() - start);
              return result;
            } catch (error) {
              _PerformanceMonitor.record(key, performance.now() - start, true);
              throw error;
            }
          };
        }
      });
      this.instances.set(instance, wrapped);
      return wrapped;
    }
    static record(key, duration, isError = false) {
      if (duration < this.config.threshold) return;
      if (!this.globalMetrics.has(key)) {
        this.globalMetrics.set(key, {
          calls: 0,
          totalTime: 0,
          minTime: Infinity,
          maxTime: 0,
          errors: 0,
          history: []
        });
      }
      const metric = this.globalMetrics.get(key);
      metric.calls++;
      metric.totalTime += duration;
      metric.minTime = Math.min(metric.minTime, duration);
      metric.maxTime = Math.max(metric.maxTime, duration);
      if (isError) metric.errors++;
      if (metric.history.length >= this.config.maxHistorySize) {
        metric.history.shift();
      }
      metric.history.push({
        duration,
        timestamp: Date.now(),
        isError
      });
      if (this.config.logToConsole) {
        const emoji = isError ? "\u274C" : duration > 100 ? "\u{1F534}" : duration > 50 ? "\u{1F7E1}" : "\u23F1\uFE0F";
        console.log(`${emoji} ${key} - ${duration.toFixed(2)}ms (${metric.calls} calls)`);
      }
    }
    static getReport(sortBy = "avgTime") {
      const report = [];
      this.globalMetrics.forEach((value, key) => {
        const sorted = [...value.history].map((entry) => entry.duration).sort((a, b) => a - b);
        const percentile = (p) => {
          const index = Math.floor(sorted.length * p);
          return sorted[index] ?? 0;
        };
        report.push({
          method: key,
          calls: value.calls,
          avgTime: parseFloat((value.totalTime / value.calls).toFixed(2)),
          minTime: parseFloat(value.minTime.toFixed(2)),
          maxTime: parseFloat(value.maxTime.toFixed(2)),
          p50: parseFloat(percentile(0.5).toFixed(2)),
          p95: parseFloat(percentile(0.95).toFixed(2)),
          p99: parseFloat(percentile(0.99).toFixed(2)),
          errorRate: parseFloat((value.errors / value.calls * 100).toFixed(2))
        });
      });
      return report.sort((a, b) => b[sortBy] - a[sortBy]);
    }
    /**
     * 특정 메서드의 상세 메트릭 조회
     */
    static getMethodMetric(methodKey) {
      return this.globalMetrics.get(methodKey);
    }
    /**
     * 가장 느린 메서드 조회
     */
    static getSlowest(limit = 10) {
      return this.getReport("avgTime").slice(0, limit);
    }
    /**
     * 가장 많이 호출된 메서드 조회
     */
    static getMostCalled(limit = 10) {
      return this.getReport("calls").slice(0, limit);
    }
    /**
     * 메트릭 초기화
     */
    static reset() {
      this.globalMetrics.clear();
    }
    static enable() {
      this.config.enabled = true;
    }
    static disable() {
      this.config.enabled = false;
    }
    static getConfig() {
      return { ...this.config };
    }
  };

  // Editor.ts
  function setDOMKey(node, element, editor2) {
    const elementToMap = editor2._elementToMap;
    if (element instanceof DocumentFragment) {
      for (const child of element.children) {
        setDOMKey(node, child, editor2);
      }
    } else {
      element["__NODE_KEY"] = node.__id;
      const elements = elementToMap.get(node.__id) ?? [];
      elements.push(element);
      elementToMap.set(node.__id, elements);
    }
  }
  function createEditor(config) {
    const editor2 = new (getEditorClass())({
      data: config.data,
      nodes: nodeInstanceStorage
    });
    return editor2;
  }
  var nodeKeyAndConfigMapper = /* @__PURE__ */ new Map();
  var Editor = class {
    _key;
    _data;
    _nodes;
    _nodeToMap = /* @__PURE__ */ new Map();
    _elementToMap = /* @__PURE__ */ new Map();
    _rootElement;
    _destoryEventListeners;
    _isUpdating;
    _updates;
    constructor(config) {
      this._key = createEditorSequentialUID();
      this._data = config.data;
      this._nodes = config.nodes;
      this._rootElement = null;
      this._destoryEventListeners = [];
      this._isUpdating = false;
      this._updates = [];
    }
    // initializeNodes(): void {
    //     for (let i = 0, len = this._nodes.length; i < len; i++) {
    //         const klass = this._nodes[i];
    //         if (klass === undefined) continue;
    //         const instNode = new klass();
    //         const nodeType = klass.getType();
    //         registedNodes[nodeType] = {
    //             node: klass,
    //             instNode: instNode
    //         };
    //     }
    // }
    registCommand;
    removeEventListeners() {
      if (this._destoryEventListeners !== void 0) {
        let destoryEventListener;
        while (destoryEventListener = this._destoryEventListeners.shift()) {
          destoryEventListener();
        }
      }
    }
    addEventListeners(rootElement) {
      this._destoryEventListeners = addRootElementEventListeners(rootElement, []);
    }
    setRootElement(rootElement) {
      const prevRootElement = this._rootElement;
      if (prevRootElement === rootElement) return;
      this.removeEventListeners();
      this.render(rootElement, this._data);
      this.addEventListeners(rootElement);
      this._rootElement = rootElement;
      console.table(PerformanceMonitor.getReport());
    }
    render(parentEl, config) {
      const nodeInstance = this._nodes.getOrThrow(config.type);
      config.__editorKey = this._key;
      config.__id = createNodeSequentialUID();
      nodeKeyAndConfigMapper.set(config.__id, config);
      nodeInstance.setConfig(config);
      const rootEl2 = nodeInstance.createDOM();
      setDOMKey(config, rootEl2, this);
      this.renderChildren({
        parentEl: rootEl2,
        parentConfig: config
      }, config.children);
      parentEl.appendChild(rootEl2);
    }
    renderChildren({
      parentEl,
      parentConfig
    }, configs) {
      for (let i = 0, len = configs.length; i < len; i++) {
        const config = configs[i];
        if (config === void 0) continue;
        const prevConfig = i === 0 ? null : configs[i - 1];
        const nodeInstance = this._nodes.getOrThrow(config.type);
        config.__id = createNodeSequentialUID();
        config.__parent = parentConfig.__id ?? null;
        config.__prev = prevConfig?.__id ?? null;
        nodeInstance.setConfig(config);
        const childEl = nodeInstance.createDOM();
        setDOMKey(config, childEl, this);
        this.renderChildren({
          parentEl: childEl,
          parentConfig: config
        }, config.children);
        parentEl.appendChild(childEl);
      }
    }
  };
  var StateConfig = class {
    key;
    parse;
    unparse;
    isEqual;
    defaultValue;
    constructor(key, value) {
      this.key = key;
      this.parse = value.parse;
      this.unparse = value.unparse ?? ((value2) => value2);
      this.isEqual = value.isEqual ?? ((a, b) => a === b);
      this.defaultValue = this.parse(void 0);
    }
  };
  function createState(key, value) {
    return new StateConfig(key, value);
  }
  var keyState = createState("key", {
    parse: (jsonValue) => jsonValue
  });
  function getEditorClass() {
    const __DEV = "development";
    if (__DEV === "development") {
      return PerformanceMonitor.wrap(Editor);
    }
    return Editor;
  }

  // ../20.browser_node/nodes/ElementNode.ts
  var ElementNode = class extends Node {
    // declare ['constructor']: KlassConstructor<typeof ElementNode>;
    _editor;
    constructor(editor2, key) {
      super(key);
      this._editor = editor2;
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

  // ../20.browser_node/nodes/component/ButtonElementNode.ts
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

  // ../20.browser_node/nodes/component/InputElementNode.ts
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

  // ../20.browser_node/nodes/component/LabelElementNode.ts
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

  // ../20.browser_node/nodes/layout/form/list.ts
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

  // ../20.browser_node/nodes/layout/form/listData.ts
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

  // ../20.browser_node/nodes/layout/form/listLabel.ts
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

  // ../20.browser_node/nodes/layout/table/TableCellElementNode.ts
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

  // ../20.browser_node/nodes/layout/table/TableElementNode.ts
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

  // ../20.browser_node/nodes/layout/table/TableRowElementNode.ts
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

  // ../20.browser_node/nodes/layout/table/TbodyElementNode.ts
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

  // ../20.browser_node/nodes/layout/table/TfootElementNode.ts
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

  // ../20.browser_node/nodes/layout/table/TheadElementNode.ts
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

  // ../20.browser_node/nodes/layout/toolbar/toolbar.ts
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

  // ../20.browser_node/nodes/RootNode.ts
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

  // App.tsx
  var rootEl = document.querySelector("#root");
  var view_mapper = {
    menu_1: [
      {
        type: __exports3.TableElementNodeIdentifier.type,
        sect_sid: "table1",
        model_id: "table1",
        attributes: [],
        children: [
          {
            type: __exports3.TheadElementNodeIdentifier.type,
            sect_sid: "table1_thead",
            attributes: []
          },
          {
            type: __exports3.TbodyElementNodeIdentifier.type,
            sect_sid: "table1_tbody",
            attributes: []
          },
          {
            type: __exports3.TfootElementNodeIdentifier.type,
            sect_sid: "table1_tfoot",
            attributes: []
          }
        ]
      }
    ]
  };
  var tableNode = {
    type: "table",
    state: {},
    children: [
      {
        type: __exports3.TheadElementNodeIdentifier.type,
        state: {},
        children: [
          {
            "type": __exports3.TableRowElementNodeIdentifier.type,
            state: {},
            "children": [
              {
                "type": __exports3.TableCellElementNodeIdentifier.type,
                state: {},
                "children": []
              },
              {
                "type": __exports3.TableCellElementNodeIdentifier.type,
                state: {},
                "children": []
              },
              {
                "type": __exports3.TableCellElementNodeIdentifier.type,
                state: {},
                "children": []
              }
            ]
          }
        ]
      }
    ]
  };
  var rootNode = {
    type: __exports3.RootElementNodeIdentifier.type,
    state: {},
    children: [
      {
        type: __exports3.ToolbarElementNodeIdentifier.type,
        state: {},
        children: [
          {
            type: __exports3.ButtonElementNodeIdentifier.type,
            state: {
              display_name: "Save"
            },
            children: []
          },
          {
            type: __exports3.ButtonElementNodeIdentifier.type,
            state: {
              display_name: "Cancel"
            },
            children: []
          },
          {
            type: __exports3.ButtonElementNodeIdentifier.type,
            state: {
              display_name: "Delete"
            },
            children: []
          },
          {
            type: __exports3.ButtonElementNodeIdentifier.type,
            state: {
              display_name: "Add"
            },
            children: []
          },
          {
            type: __exports3.ButtonElementNodeIdentifier.type,
            state: {
              display_name: "Edit"
            },
            children: []
          }
        ]
      },
      {
        type: __exports3.FormListElementNodeIdentifier.type,
        state: {},
        children: [
          {
            type: __exports3.FormListLabelElementNodeIdentifier.type,
            state: {},
            children: [
              {
                type: __exports3.LabelElementNodeIdentifier.type,
                state: {
                  display_name: "Name"
                },
                children: []
              }
            ]
          },
          {
            type: __exports3.FormListDataElementNodeIdentifier.type,
            state: {},
            children: [
              {
                type: __exports3.InputElementNodeIdentifier.type,
                state: {},
                children: []
              }
            ]
          }
        ]
      },
      tableNode
    ]
  };
  var tableBodyNode = {
    type: __exports3.TbodyElementNodeIdentifier.type,
    state: {},
    children: []
  };
  for (let rowIdx = 0; rowIdx < 6e3; rowIdx++) {
    const tableRowNode = {
      type: __exports3.TableRowElementNodeIdentifier.type,
      state: {},
      children: []
    };
    for (let colIdx = 0; colIdx < 20; colIdx++) {
      tableRowNode.children.push({
        type: __exports3.TableCellElementNodeIdentifier.type,
        state: {},
        children: []
      });
    }
    tableBodyNode.children.push(tableRowNode);
  }
  tableNode.children.push(tableBodyNode);
  if (rootEl === null) {
    throwException(false, "rootEl is null");
  }
  var editor = createEditor({
    // nodes: nodes,
    data: rootNode
  });
  editor.setRootElement(rootEl);
})();
//# sourceMappingURL=browser.js.map
