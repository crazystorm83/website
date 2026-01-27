"use strict";
(() => {
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

  // datas/EventInstanceStorage.ts
  var EventInstanceStorage = class extends InstanceStorage {
  };

  // decorators/NHEventHandler.ts
  var eventInstanceStorage = new EventInstanceStorage();
  function NHEventHandler({
    nodeIdentifier
  }) {
    return function(constructor) {
      eventInstanceStorage.add(nodeIdentifier.type, constructor);
    };
  }

  // datas/NodeInstanceStorage.ts
  var NodeInstanceStorage = class extends InstanceStorage {
  };

  // decorators/NHNode.ts
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
  function createSequentialUID(uidKey) {
    const uid = UIdMap.get(uidKey) ?? 1;
    UIdMap.set(uidKey, uid + 1);
    return `${uidKey}-${uid}`;
  }

  // nodes/Node.ts
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
})();
//# sourceMappingURL=browser_infra.js.map
