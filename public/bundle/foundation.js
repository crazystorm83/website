(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.foundation = {}));
})(this, (function (exports) { 'use strict';

    /**
    interface IEvents {
        transform: { value: number; history: string[] };
        message: string;
    }

    class MyChainEmitter extends ChainEmitter<IEvents> {}

    const emitter = new MyChainEmitter({
        emit: {
            notify: (event) => console.log(`No listeners for: ${String(event)}`)
        },
        getListenersOrThrow: {
            throwMessage: (event) => `Event ${String(event)} not found`
        }
    });

    // 동기 체인
    emitter.on('transform', (data) => ({
        break: false,
        payload: {
            value: data.value * 2,
            history: [...data.history, 'doubled']
        }
    }), 10);  // priority 10

    emitter.on('transform', (data) => ({
        break: false,
        payload: {
            value: data.value + 10,
            history: [...data.history, 'added 10']
        }
    }), 5);  // priority 5

    const result = emitter.emit('transform', { value: 5, history: ['start'] });
    console.log(result);
    // { value: 20, history: ['start', 'doubled', 'added 10'] }

    // 비동기 체인
    emitter.onAsync('message', async (msg) => {
        await delay(100);
        return { break: false, payload: msg + ' world' };
    });

    emitter.onAsync('message', async (msg) => {
        return { break: false, payload: msg + '!' };
    });

    const asyncResult = await emitter.emitAsync('message', 'hello');
    console.log(asyncResult);  // "hello world!"

    // break 사용
    emitter.on('transform', (data) => ({
        break: true,  // 여기서 중단
        payload: { value: 999, history: ['stopped'] }
    }), 20);  // 가장 높은 priority

    const stoppedResult = emitter.emit('transform', { value: 1, history: [] });
    console.log(stoppedResult);  // { value: 999, history: ['stopped'] }
     */
    class ChainEmitter {
        _listeners = new Map();
        _asyncListeners = new Map();
        _config;
        constructor(config) {
            this._listeners = new Map();
            this._asyncListeners = new Map();
            this._config = config;
        }
        _getListeners(event) {
            return this._listeners.get(event);
        }
        _getAsyncListeners(event) {
            return this._asyncListeners.get(event);
        }
        _getListenersOrThrow(event) {
            const listeners = this._getListeners(event);
            if (listeners === undefined) {
                const throwMessage = this._config.getListenersOrThrow?.throwMessage?.(event);
                throw new Error(throwMessage);
            }
            return listeners;
        }
        _getAsyncListenersOrThrow(event) {
            const listeners = this._getAsyncListeners(event);
            if (listeners === undefined) {
                const throwMessage = this._config.getListenersOrThrow?.throwMessage?.(event);
                throw new Error(throwMessage);
            }
            return listeners;
        }
        on(event, listener, priority = 5) {
            let listeners = this._getListeners(event);
            if (listeners === undefined) {
                listeners = [];
                this._listeners.set(event, listeners);
            }
            listeners.push({ listener, priority });
            if (listeners.length > 1) {
                listeners.sort((a, b) => b.priority - a.priority);
            }
            return () => this.off(event, listener);
        }
        onAsync(event, listener, priority = 5) {
            let listeners = this._getAsyncListeners(event);
            if (listeners === undefined) {
                listeners = [];
                this._asyncListeners.set(event, listeners);
            }
            listeners.push({ listener, priority });
            if (listeners.length > 1) {
                listeners.sort((a, b) => b.priority - a.priority);
            }
            return () => this.offAsync(event, listener);
        }
        off(event, listener) {
            if (!this._listeners.has(event)) {
                return;
            }
            const listeners = this._getListenersOrThrow(event);
            const newListeners = listeners.filter(x => x.listener !== listener);
            if (newListeners.length === 0) {
                this._listeners.delete(event);
            }
            else {
                this._listeners.set(event, newListeners);
            }
        }
        offAsync(event, listener) {
            if (!this._asyncListeners.has(event)) {
                return;
            }
            const listeners = this._getAsyncListenersOrThrow(event);
            const newListeners = listeners.filter(x => x.listener !== listener);
            if (newListeners.length === 0) {
                this._asyncListeners.delete(event);
            }
            else {
                this._asyncListeners.set(event, newListeners);
            }
        }
        emit(event, data) {
            const listeners = this._getListeners(event);
            if (!listeners) {
                this._config.emit?.notify?.(event);
                return;
            }
            let payload = data;
            for (const { listener } of listeners) {
                const result = listener(payload);
                if (result.break) {
                    break;
                }
                payload = {
                    ...payload,
                    ...result.payload,
                };
            }
        }
        async emitAsync(event, data) {
            const listeners = this._getAsyncListeners(event);
            if (!listeners) {
                this._config.emit?.notify?.(event);
                return;
            }
            let payload = data;
            for (const { listener } of listeners) {
                const result = await listener(payload);
                if (result.break) {
                    break;
                }
                payload = {
                    ...payload,
                    ...result.payload,
                };
            }
            return;
        }
        once(event, listener, priority = 5) {
            if (this._listeners.has(event)) {
                this._config.once?.notify?.(event);
                return;
            }
            return this.on(event, listener, priority);
        }
        onceAsync(event, listener, priority = 5) {
            if (this._asyncListeners.has(event)) {
                this._config.once?.notify?.(event);
                return;
            }
            return this.onAsync(event, listener, priority);
        }
    }

    /**
    interface IEvent {
        mousedown: string;
        mouseup: { type: string, button: number }

        sendMessage: { type: string, message: string }
    }}

    const emitter = new Emitter<IEvent>();

    // 동기 이벤트 처리
    emitter.on('mousedown', (data) => {
        console.log(data);
    });
    emitter.on('mouseup', (data) => {
        console.log(data);
    });
    emitter.on('sendMessage', (data) => {
        console.log(data);
    });
    emitter.emit('mousedown', { x: 10, y: 20 });
    emitter.emit('mouseup', { type: 'left', button: 1 });
    emitter.emit('sendMessage', { type: 'text', message: 'Hello, world!' });

    // 비동기 이벤트 처리
    emitter.onAsync('mousedown', async (data) => {
        console.log(data);
    });
    emitter.onAsync('mouseup', async (data) => {
        console.log(data);
    });
    emitter.onAsync('sendMessage', async (data) => {
        console.log(data);
    });
    await emitter.emitAsync('mousedown', { x: 10, y: 20 });
    await emitter.emitAsync('mouseup', { type: 'left', button: 1 });
    await emitter.emitAsync('sendMessage', { type: 'text', message: 'Hello, world!' });

     */
    class Emitter {
        _listeners = new Map();
        _asyncListeners = new Map();
        _config;
        constructor(config) {
            this._listeners = new Map();
            this._config = config;
        }
        _getListeners(event) {
            return this._listeners.get(event);
        }
        _getListenersOrThrow(event) {
            const listeners = this._getListeners(event);
            if (listeners === undefined) {
                const throwMessage = this._config.getListenersOrThrow?.throwMessage?.(event);
                throw new Error(throwMessage);
            }
            return listeners;
        }
        on(event, listener, priority = 50) {
            let listeners = this._getListeners(event);
            if (listeners === undefined) {
                listeners = [];
                this._listeners.set(event, listeners);
            }
            listeners.push({ listener, priority });
            if (listeners.length > 1) {
                listeners.sort((a, b) => b.priority - a.priority);
            }
            return (() => {
                this.off(event, listener);
            });
        }
        onAsync(event, listener, priority = 50) {
            let listeners = this._asyncListeners.get(event);
            if (listeners === undefined) {
                listeners = [];
                this._asyncListeners.set(event, listeners);
            }
            listeners.push({ listener, priority });
            if (listeners.length > 1) {
                listeners.sort((a, b) => b.priority - a.priority);
            }
            return (() => {
                this.offAsync(event, listener);
            });
        }
        off(event, listener) {
            if (!this._listeners.has(event)) {
                return;
            }
            const listeners = this._getListenersOrThrow(event);
            const new_listeners = listeners.filter(x => x.listener !== listener);
            if (new_listeners.length === 0) {
                this._listeners.delete(event);
            }
            else {
                this._listeners.set(event, new_listeners);
            }
        }
        offAsync(event, listener) {
            if (!this._asyncListeners.has(event)) {
                return;
            }
            const listeners = this._getListenersOrThrow(event);
            const new_listeners = listeners.filter(x => x.listener !== listener);
            if (new_listeners.length === 0) {
                this._asyncListeners.delete(event);
            }
        }
        emit(event, data) {
            const listeners = this._listeners.get(event);
            if (!listeners) {
                this._config.emit?.notify?.(event);
                return;
            }
            for (const listener of listeners) {
                const result = listener.listener(data);
                if (result?.break) {
                    break;
                }
            }
        }
        async emitAsync(event, data) {
            const listeners = this._asyncListeners.get(event);
            if (!listeners) {
                this._config.emit?.notify?.(event);
            }
            else {
                for (const listener of listeners) {
                    const result = await listener.listener(data);
                    if (result?.break) {
                        break;
                    }
                }
            }
        }
        once(event, listener, priority = 50) {
            if (this._listeners.has(event)) {
                this._config.once?.notify?.(event);
                return;
            }
            else {
                return this.on(event, listener, priority);
            }
        }
        onceAsync(event, listener, priority = 50) {
            if (this._asyncListeners.has(event)) {
                this._config.once?.notify?.(event);
                return;
            }
            return this.onAsync(event, listener, priority);
        }
    }

    const UIdMap = new Map();
    function createNodeSequentialUID() {
        const uidKey = 'node';
        return createSequentialUID(uidKey);
    }
    function createElementSequentialUID() {
        const uidKey = 'element';
        return createSequentialUID(uidKey);
    }
    function createEditorSequentialUID() {
        const uidKey = 'editor';
        return createSequentialUID(uidKey);
    }
    function createSequentialUID(uidKey) {
        const uid = UIdMap.get(uidKey) ?? 1;
        UIdMap.set(uidKey, uid + 1);
        return `${uidKey}-${uid}`;
    }

    exports.ChainEmitter = ChainEmitter;
    exports.Emitter = Emitter;
    exports.createEditorSequentialUID = createEditorSequentialUID;
    exports.createElementSequentialUID = createElementSequentialUID;
    exports.createNodeSequentialUID = createNodeSequentialUID;

}));
//# sourceMappingURL=foundation.js.map
