(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.browser_foundation = {}));
})(this, (function (exports) { 'use strict';

    function throwException(condition, message) {
        if (condition) {
            return;
        }
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

    class Executor {
    }

    exports.Executor = Executor;
    exports.InstanceStorage = InstanceStorage;
    exports.Register = Register;
    exports.Storage = Storage;
    exports.throwException = throwException;

}));
//# sourceMappingURL=browser_foundation.js.map
