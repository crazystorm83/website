(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.browser_infra = {}));
})(this, (function (exports) { 'use strict';

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

    class ElementInstanceStorage extends InstanceStorage {
    }

    class EventInstanceStorage extends InstanceStorage {
    }

    class NodeInstanceStorage extends InstanceStorage {
    }

    const eventInstanceStorage = new EventInstanceStorage();
    function NHEventHandler({ nodeIdentifier, }) {
        return function (constructor) {
            eventInstanceStorage.add(nodeIdentifier.type, constructor);
        };
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
    function createCommand(type) {
        return { type };
    }

    exports.ElementInstanceStorage = ElementInstanceStorage;
    exports.EventInstanceStorage = EventInstanceStorage;
    exports.NHEventHandler = NHEventHandler;
    exports.NHNode = NHNode;
    exports.Node = Node;
    exports.NodeInstanceStorage = NodeInstanceStorage;
    exports.createCommand = createCommand;
    exports.eventInstanceStorage = eventInstanceStorage;
    exports.nodeInstanceStorage = nodeInstanceStorage;

}));
//# sourceMappingURL=browser_infra.js.map
