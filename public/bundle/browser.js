(function (factory) {
    typeof define === 'function' && define.amd ? define(['react'], factory) :
    factory();
})((function () { 'use strict';

    function createIdentifier(name) {
      return {
        type: name
      };
    }

    class EventHandler {
    }

    class BrowserEventHandler extends EventHandler {
    }

    const ButtonElementNodeIdentifier = createIdentifier("button");

    const InputElementNodeIdentifier = createIdentifier("input");

    const LabelElementNodeIdentifier = createIdentifier("label");

    const RootElementNodeIdentifier = createIdentifier("root");

    const FormListDataElementNodeIdentifier = createIdentifier("li");

    const FormListElementNodeIdentifier = createIdentifier("ul");

    const FormListLabelElementNodeIdentifier = createIdentifier("li");

    const TableCellElementNodeIdentifier = createIdentifier("td");

    const TableElementNodeIdentifier = createIdentifier("table");

    const TableRowElementNodeIdentifier = createIdentifier("tr");

    const TbodyElementNodeIdentifier = createIdentifier("tbody");

    const TfootElementNodeIdentifier = createIdentifier("tfoot");

    const TheadElementNodeIdentifier = createIdentifier("thead");

    const ToolbarElementNodeIdentifier = createIdentifier("toolbar");

    const PageElementNodeIdentifier = createIdentifier("page");

    function throwException(condition, message) {
      throw new Error(message);
    }

    class Register {
      __items = /* @__PURE__ */ new Map();
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
        return item;
      }
    }

    class InstanceStorage extends Storage {
    }

    class EventInstanceStorage extends InstanceStorage {
    }

    class NodeInstanceStorage extends InstanceStorage {
    }

    const eventInstanceStorage = new EventInstanceStorage();
    function NHEventHandler({
      nodeIdentifier
    }) {
      return function(constructor) {
        eventInstanceStorage.add(nodeIdentifier.type, constructor);
      };
    }

    const nodeInstanceStorage = new NodeInstanceStorage();
    function NHNode({
      identifier
    }) {
      return (constructor) => {
        nodeInstanceStorage.add(identifier.type, constructor);
      };
    }

    const UIdMap = /* @__PURE__ */ new Map();
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
        throwException(false, "createDOM must be implemented");
      }
      updateDOM() {
        throwException(false, "updateDOM must be implemented");
      }
      $config() {
      }
    }

    class ElementNodeEventHandler extends BrowserEventHandler {
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
    }

    var __getOwnPropDesc$h = Object.getOwnPropertyDescriptor;
    var __decorateClass$h = (decorators, target, key, kind) => {
      var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$h(target, key) : target;
      for (var i = decorators.length - 1, decorator; i >= 0; i--)
        if (decorator = decorators[i])
          result = (decorator(result)) || result;
      return result;
    };
    let ButtonElementNodeEventHandler = class extends ElementNodeEventHandler {
      getType() {
        return ButtonElementNodeIdentifier.type;
      }
    };
    ButtonElementNodeEventHandler = __decorateClass$h([
      NHEventHandler({
        nodeIdentifier: ButtonElementNodeIdentifier
      })
    ], ButtonElementNodeEventHandler);

    var __getOwnPropDesc$g = Object.getOwnPropertyDescriptor;
    var __decorateClass$g = (decorators, target, key, kind) => {
      var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$g(target, key) : target;
      for (var i = decorators.length - 1, decorator; i >= 0; i--)
        if (decorator = decorators[i])
          result = (decorator(result)) || result;
      return result;
    };
    let InputElementNodeEventHandler = class extends ElementNodeEventHandler {
      getType() {
        return InputElementNodeIdentifier.type;
      }
    };
    InputElementNodeEventHandler = __decorateClass$g([
      NHEventHandler({
        nodeIdentifier: InputElementNodeIdentifier
      })
    ], InputElementNodeEventHandler);

    var __getOwnPropDesc$f = Object.getOwnPropertyDescriptor;
    var __decorateClass$f = (decorators, target, key, kind) => {
      var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$f(target, key) : target;
      for (var i = decorators.length - 1, decorator; i >= 0; i--)
        if (decorator = decorators[i])
          result = (decorator(result)) || result;
      return result;
    };
    let LabelElementNodeEventHandler = class extends ElementNodeEventHandler {
      getType() {
        return LabelElementNodeIdentifier.type;
      }
    };
    LabelElementNodeEventHandler = __decorateClass$f([
      NHEventHandler({
        nodeIdentifier: LabelElementNodeIdentifier
      })
    ], LabelElementNodeEventHandler);

    function blurActiveElement() {
      document.activeElement?.blur();
    }
    const rootElementEventListeners = [
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
    function addRootElementEventListeners(rootEl, ignoreEvents) {
      const destoryEventListeners = [];
      for (const [eventName, handler] of rootElementEventListeners) {
        if (ignoreEvents.includes(eventName)) continue;
        rootEl.addEventListener(eventName, handler);
        destoryEventListeners.push(() => {
          rootEl.removeEventListener(eventName, handler);
        });
      }
      return destoryEventListeners;
    }

    class PerformanceMonitor {
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
            if (typeof value !== "function" || typeof prop === "symbol" || PerformanceMonitor.config.exclude.includes(prop) || prop.startsWith("_")) {
              return value;
            }
            return function(...args) {
              if (Math.random() > PerformanceMonitor.config.sampleRate) {
                return value.apply(this, args);
              }
              const key = `${className}.${prop}`;
              const start = performance.now();
              try {
                const result = value.apply(this, args);
                if (result instanceof Promise) {
                  return result.finally(() => {
                    PerformanceMonitor.record(key, performance.now() - start);
                  });
                }
                PerformanceMonitor.record(key, performance.now() - start);
                return result;
              } catch (error) {
                PerformanceMonitor.record(key, performance.now() - start, true);
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
    }

    function setDOMKey(node, element, editor) {
      const elementToMap = editor._elementToMap;
      if (element instanceof DocumentFragment) {
        for (const child of element.children) {
          setDOMKey(node, child, editor);
        }
      } else {
        element["__NODE_KEY"] = node.__id;
        const elements = elementToMap.get(node.__id) ?? [];
        elements.push(element);
        elementToMap.set(node.__id, elements);
      }
    }
    function createEditor(config) {
      const editor = new (getEditorClass())({
        data: config.data,
        event: config.event,
        renderer_nodes: config.renderer_nodes ?? nodeInstanceStorage
      });
      return editor;
    }
    const nodeKeyAndConfigMapper = /* @__PURE__ */ new Map();
    class Editor {
      _key;
      _data;
      _event;
      _renderer_nodes;
      _nodeToMap = /* @__PURE__ */ new Map();
      _elementToMap = /* @__PURE__ */ new Map();
      _rootElement;
      _destoryEventListeners;
      _isUpdating;
      _updates;
      constructor(config) {
        this._key = createEditorSequentialUID();
        this._data = config.data;
        this._event = config.event;
        this._renderer_nodes = config.renderer_nodes;
        this._rootElement = null;
        this._destoryEventListeners = [];
        this._isUpdating = false;
        this._updates = [];
      }
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
        let element = rootElement;
        if (this._event.type === "document") {
          element = document.body;
        }
        this._destoryEventListeners = addRootElementEventListeners(element, []);
      }
      setRootElement(rootElement) {
        const prevRootElement = this._rootElement;
        if (prevRootElement === rootElement) return;
        this.removeEventListeners();
        this.render(rootElement, this._data);
        this.addEventListeners(rootElement);
        this._rootElement = rootElement;
        console.log(this._data);
        console.table(PerformanceMonitor.getReport());
      }
      render(parentEl, config) {
        const nodeInstance = this._renderer_nodes.getOrThrow(config.type);
        config.__editorKey = this._key;
        config.__id = createNodeSequentialUID();
        nodeKeyAndConfigMapper.set(config.__id, config);
        nodeInstance.setConfig(config);
        const rootEl = nodeInstance.createDOM();
        setDOMKey(config, rootEl, this);
        this.renderChildren({
          parentEl: rootEl,
          parentConfig: config
        }, config.children);
        parentEl.appendChild(rootEl);
      }
      renderChildren({
        parentEl,
        parentConfig
      }, configs) {
        for (let i = 0, len = configs.length; i < len; i++) {
          const config = configs[i];
          if (config === void 0) continue;
          const prevSiblingConfig = i === 0 ? null : configs[i - 1];
          const nextSiblingConfig = i === len - 1 ? null : configs[i + 1];
          const nodeInstance = this._renderer_nodes.getOrThrow(config.type);
          config.__id = createNodeSequentialUID();
          config.__parentId = parentConfig.__id ?? null;
          config.__prevSiblingId = prevSiblingConfig?.__id ?? null;
          config.__nextSiblingId = nextSiblingConfig?.__id ?? null;
          nodeInstance.setConfig(config);
          const childEl = nodeInstance.createDOM();
          setDOMKey(config, childEl, this);
          this.renderChildren({
            parentEl: childEl,
            parentConfig: config
          }, config.children);
          parentEl.appendChild(childEl);
        }
        parentConfig.__firstChildId = configs[0]?.__id ?? null;
        parentConfig.__lastChildId = configs[configs.length - 1]?.__id ?? null;
      }
    }
    class StateConfig {
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
    }
    function createState(key, value) {
      return new StateConfig(key, value);
    }
    createState("key", {
      parse: (jsonValue) => jsonValue
    });
    function getEditorClass() {
      {
        return PerformanceMonitor.wrap(Editor);
      }
    }

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

    var __getOwnPropDesc$e = Object.getOwnPropertyDescriptor;
    var __decorateClass$e = (decorators, target, key, kind) => {
      var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$e(target, key) : target;
      for (var i = decorators.length - 1, decorator; i >= 0; i--)
        if (decorator = decorators[i])
          result = (decorator(result)) || result;
      return result;
    };
    let ButtonElementNode = class extends ElementNode {
      buildCss() {
        const classNames = ["button"];
        return classNames.join(" ");
      }
      buildStyle() {
        return "";
      }
      getType() {
        return ButtonElementNodeIdentifier.type;
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
    ButtonElementNode = __decorateClass$e([
      NHNode({
        identifier: ButtonElementNodeIdentifier
      })
    ], ButtonElementNode);

    var __getOwnPropDesc$d = Object.getOwnPropertyDescriptor;
    var __decorateClass$d = (decorators, target, key, kind) => {
      var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$d(target, key) : target;
      for (var i = decorators.length - 1, decorator; i >= 0; i--)
        if (decorator = decorators[i])
          result = (decorator(result)) || result;
      return result;
    };
    let InputElementNode = class extends ElementNode {
      buildCss() {
        const classNames = ["input"];
        return classNames.join(" ");
      }
      buildStyle() {
        return "";
      }
      getType() {
        return InputElementNodeIdentifier.type;
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
    InputElementNode = __decorateClass$d([
      NHNode({
        identifier: InputElementNodeIdentifier
      })
    ], InputElementNode);

    var __getOwnPropDesc$c = Object.getOwnPropertyDescriptor;
    var __decorateClass$c = (decorators, target, key, kind) => {
      var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$c(target, key) : target;
      for (var i = decorators.length - 1, decorator; i >= 0; i--)
        if (decorator = decorators[i])
          result = (decorator(result)) || result;
      return result;
    };
    let LabelElementNode = class extends ElementNode {
      buildCss() {
        const classNames = ["label"];
        return classNames.join(" ");
      }
      buildStyle() {
        return "";
      }
      getType() {
        return LabelElementNodeIdentifier.type;
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
    LabelElementNode = __decorateClass$c([
      NHNode({
        identifier: LabelElementNodeIdentifier
      })
    ], LabelElementNode);

    var __getOwnPropDesc$b = Object.getOwnPropertyDescriptor;
    var __decorateClass$b = (decorators, target, key, kind) => {
      var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$b(target, key) : target;
      for (var i = decorators.length - 1, decorator; i >= 0; i--)
        if (decorator = decorators[i])
          result = (decorator(result)) || result;
      return result;
    };
    let FormListElementNode = class extends ElementNode {
      buildCss() {
        return "";
      }
      buildStyle() {
        return "";
      }
      getType() {
        return FormListElementNodeIdentifier.type;
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
    FormListElementNode = __decorateClass$b([
      NHNode({
        identifier: FormListElementNodeIdentifier
      })
    ], FormListElementNode);

    var __getOwnPropDesc$a = Object.getOwnPropertyDescriptor;
    var __decorateClass$a = (decorators, target, key, kind) => {
      var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$a(target, key) : target;
      for (var i = decorators.length - 1, decorator; i >= 0; i--)
        if (decorator = decorators[i])
          result = (decorator(result)) || result;
      return result;
    };
    let FormListDataElementNode = class extends ElementNode {
      buildCss() {
        return "";
      }
      buildStyle() {
        return "";
      }
      getType() {
        return FormListDataElementNodeIdentifier.type;
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
    FormListDataElementNode = __decorateClass$a([
      NHNode({
        identifier: FormListDataElementNodeIdentifier
      })
    ], FormListDataElementNode);

    var __getOwnPropDesc$9 = Object.getOwnPropertyDescriptor;
    var __decorateClass$9 = (decorators, target, key, kind) => {
      var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$9(target, key) : target;
      for (var i = decorators.length - 1, decorator; i >= 0; i--)
        if (decorator = decorators[i])
          result = (decorator(result)) || result;
      return result;
    };
    let FormListLabelElementNode = class extends ElementNode {
      buildCss() {
        return "";
      }
      buildStyle() {
        return "";
      }
      static getType() {
        return FormListLabelElementNodeIdentifier.type;
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
    FormListLabelElementNode = __decorateClass$9([
      NHNode({
        identifier: FormListLabelElementNodeIdentifier
      })
    ], FormListLabelElementNode);

    var __getOwnPropDesc$8 = Object.getOwnPropertyDescriptor;
    var __decorateClass$8 = (decorators, target, key, kind) => {
      var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$8(target, key) : target;
      for (var i = decorators.length - 1, decorator; i >= 0; i--)
        if (decorator = decorators[i])
          result = (decorator(result)) || result;
      return result;
    };
    let TableCellElementNode = class extends ElementNode {
      buildCss() {
        return "";
      }
      buildStyle() {
        return "";
      }
      getType() {
        return TableCellElementNodeIdentifier.type;
      }
      createDOM() {
        return document.createElement("td");
      }
      updateDOM() {
        return true;
      }
    };
    TableCellElementNode = __decorateClass$8([
      NHNode({
        identifier: TableCellElementNodeIdentifier
      })
    ], TableCellElementNode);

    var __getOwnPropDesc$7 = Object.getOwnPropertyDescriptor;
    var __decorateClass$7 = (decorators, target, key, kind) => {
      var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$7(target, key) : target;
      for (var i = decorators.length - 1, decorator; i >= 0; i--)
        if (decorator = decorators[i])
          result = (decorator(result)) || result;
      return result;
    };
    let TableElementNode = class extends ElementNode {
      buildCss() {
        return "";
      }
      buildStyle() {
        return "";
      }
      getType() {
        return TableElementNodeIdentifier.type;
      }
      createDOM() {
        return document.createElement("table");
      }
      updateDOM() {
        return true;
      }
    };
    TableElementNode = __decorateClass$7([
      NHNode({
        identifier: TableElementNodeIdentifier
      })
    ], TableElementNode);

    var __getOwnPropDesc$6 = Object.getOwnPropertyDescriptor;
    var __decorateClass$6 = (decorators, target, key, kind) => {
      var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$6(target, key) : target;
      for (var i = decorators.length - 1, decorator; i >= 0; i--)
        if (decorator = decorators[i])
          result = (decorator(result)) || result;
      return result;
    };
    let TableRowElementNode = class extends ElementNode {
      buildCss() {
        return "";
      }
      buildStyle() {
        return "";
      }
      getType() {
        return TableRowElementNodeIdentifier.type;
      }
      createDOM() {
        return document.createElement("tr");
      }
      updateDOM() {
        return true;
      }
    };
    TableRowElementNode = __decorateClass$6([
      NHNode({
        identifier: TableRowElementNodeIdentifier
      })
    ], TableRowElementNode);

    var __getOwnPropDesc$5 = Object.getOwnPropertyDescriptor;
    var __decorateClass$5 = (decorators, target, key, kind) => {
      var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$5(target, key) : target;
      for (var i = decorators.length - 1, decorator; i >= 0; i--)
        if (decorator = decorators[i])
          result = (decorator(result)) || result;
      return result;
    };
    let TbodyElementNode = class extends ElementNode {
      buildCss() {
        return "";
      }
      buildStyle() {
        return "";
      }
      getType() {
        return TbodyElementNodeIdentifier.type;
      }
      createDOM() {
        return document.createElement("tbody");
      }
      updateDOM() {
        return true;
      }
    };
    TbodyElementNode = __decorateClass$5([
      NHNode({
        identifier: TbodyElementNodeIdentifier
      })
    ], TbodyElementNode);

    var __getOwnPropDesc$4 = Object.getOwnPropertyDescriptor;
    var __decorateClass$4 = (decorators, target, key, kind) => {
      var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$4(target, key) : target;
      for (var i = decorators.length - 1, decorator; i >= 0; i--)
        if (decorator = decorators[i])
          result = (decorator(result)) || result;
      return result;
    };
    let TfootElementNode = class extends ElementNode {
      buildCss() {
        return "";
      }
      buildStyle() {
        return "";
      }
      getType() {
        return TfootElementNodeIdentifier.type;
      }
      createDOM() {
        return document.createElement("tfoot");
      }
      updateDOM() {
        return true;
      }
    };
    TfootElementNode = __decorateClass$4([
      NHNode({
        identifier: TfootElementNodeIdentifier
      })
    ], TfootElementNode);

    var __getOwnPropDesc$3 = Object.getOwnPropertyDescriptor;
    var __decorateClass$3 = (decorators, target, key, kind) => {
      var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$3(target, key) : target;
      for (var i = decorators.length - 1, decorator; i >= 0; i--)
        if (decorator = decorators[i])
          result = (decorator(result)) || result;
      return result;
    };
    let TheadElementNode = class extends ElementNode {
      buildCss() {
        return "";
      }
      buildStyle() {
        return "";
      }
      getType() {
        return TheadElementNodeIdentifier.type;
      }
      createDOM() {
        return document.createElement("thead");
      }
      updateDOM() {
        return true;
      }
    };
    TheadElementNode = __decorateClass$3([
      NHNode({
        identifier: TheadElementNodeIdentifier
      })
    ], TheadElementNode);

    var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
    var __decorateClass$2 = (decorators, target, key, kind) => {
      var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$2(target, key) : target;
      for (var i = decorators.length - 1, decorator; i >= 0; i--)
        if (decorator = decorators[i])
          result = (decorator(result)) || result;
      return result;
    };
    let ToolbarElementNode = class extends ElementNode {
      buildCss() {
        return "";
      }
      buildStyle() {
        return "";
      }
      getType() {
        return ToolbarElementNodeIdentifier.type;
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
    ToolbarElementNode = __decorateClass$2([
      NHNode({
        identifier: ToolbarElementNodeIdentifier
      })
    ], ToolbarElementNode);

    var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
    var __decorateClass$1 = (decorators, target, key, kind) => {
      var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$1(target, key) : target;
      for (var i = decorators.length - 1, decorator; i >= 0; i--)
        if (decorator = decorators[i])
          result = (decorator(result)) || result;
      return result;
    };
    let PageElementNode = class extends ElementNode {
      buildCss() {
        const classNames = ["page"];
        return classNames.join(" ");
      }
      buildStyle() {
        return "";
      }
      createDOM() {
        const pageEl = document.createElement("div");
        return pageEl;
      }
      updateDOM() {
        return true;
      }
    };
    PageElementNode = __decorateClass$1([
      NHNode({
        identifier: PageElementNodeIdentifier
      })
    ], PageElementNode);

    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __decorateClass = (decorators, target, key, kind) => {
      var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
      for (var i = decorators.length - 1, decorator; i >= 0; i--)
        if (decorator = decorators[i])
          result = (decorator(result)) || result;
      return result;
    };
    let RootNode = class extends ElementNode {
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
        identifier: RootElementNodeIdentifier
      })
    ], RootNode);

    const rootEl = document.querySelector("#root");
    const tableNode = {
      type: "table",
      state: {},
      children: [
        {
          type: TheadElementNodeIdentifier.type,
          state: {},
          children: [
            {
              "type": TableRowElementNodeIdentifier.type,
              state: {},
              "children": [
                {
                  "type": TableCellElementNodeIdentifier.type,
                  state: {},
                  "children": []
                },
                {
                  "type": TableCellElementNodeIdentifier.type,
                  state: {},
                  "children": []
                },
                {
                  "type": TableCellElementNodeIdentifier.type,
                  state: {},
                  "children": []
                }
              ]
            }
          ]
        }
      ]
    };
    const rootNode = {
      type: RootElementNodeIdentifier.type,
      state: {},
      children: [
        {
          type: ToolbarElementNodeIdentifier.type,
          state: {},
          children: [
            {
              type: ButtonElementNodeIdentifier.type,
              state: {
                display_name: "Save"
              },
              children: []
            },
            {
              type: ButtonElementNodeIdentifier.type,
              state: {
                display_name: "Cancel"
              },
              children: []
            },
            {
              type: ButtonElementNodeIdentifier.type,
              state: {
                display_name: "Delete"
              },
              children: []
            },
            {
              type: ButtonElementNodeIdentifier.type,
              state: {
                display_name: "Add"
              },
              children: []
            },
            {
              type: ButtonElementNodeIdentifier.type,
              state: {
                display_name: "Edit"
              },
              children: []
            }
          ]
        },
        {
          type: FormListElementNodeIdentifier.type,
          state: {},
          children: [
            {
              type: FormListLabelElementNodeIdentifier.type,
              state: {},
              children: [
                {
                  type: LabelElementNodeIdentifier.type,
                  state: {
                    display_name: "Name"
                  },
                  children: []
                }
              ]
            },
            {
              type: FormListDataElementNodeIdentifier.type,
              state: {},
              children: [
                {
                  type: InputElementNodeIdentifier.type,
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
    const tableBodyNode = {
      type: TbodyElementNodeIdentifier.type,
      state: {},
      children: []
    };
    for (let rowIdx = 0; rowIdx < 1e3; rowIdx++) {
      const tableRowNode = {
        type: TableRowElementNodeIdentifier.type,
        state: {},
        children: []
      };
      for (let colIdx = 0; colIdx < 100; colIdx++) {
        tableRowNode.children.push({
          type: TableCellElementNodeIdentifier.type,
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
    const editor = createEditor({
      // nodes: nodes,
      data: rootNode,
      event: {
        type: "document"
      }
    });
    editor.setRootElement(rootEl);

}));
//# sourceMappingURL=browser.js.map
