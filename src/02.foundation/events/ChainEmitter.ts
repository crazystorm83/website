import { EventDatas } from "@primitive_types";

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
export abstract class ChainEmitter<TEvents extends Record<string, Record<string, unknown>>> implements EventDatas.IChainEmitter<TEvents> {
    protected _listeners: Map<keyof TEvents, { listener: EventDatas.ChainEmitterHandler<TEvents, Record<string, unknown>, EventDatas.ChainCallbackResult>; priority: number }[]> = new Map();
    protected _asyncListeners: Map<keyof TEvents, { listener: EventDatas.ChainEmitterAsyncHandler<TEvents, Record<string, unknown>, EventDatas.ChainCallbackResult>; priority: number }[]> = new Map();
    protected _config: EventDatas.IChainEmitterConfig<TEvents>;

    constructor(config: EventDatas.IChainEmitterConfig<TEvents>) {
        this._listeners = new Map();
        this._asyncListeners = new Map();
        this._config = config;
    }

    protected _getListeners(event: keyof TEvents): { listener: EventDatas.ChainEmitterHandler<TEvents, Record<string, unknown>, EventDatas.ChainCallbackResult>; priority: number }[] | undefined {
        return this._listeners.get(event);
    }

    protected _getAsyncListeners(event: keyof TEvents): { listener: EventDatas.ChainEmitterAsyncHandler<TEvents, Record<string, unknown>, EventDatas.ChainCallbackResult>; priority: number }[] | undefined {
        return this._asyncListeners.get(event);
    }

    protected _getListenersOrThrow(event: keyof TEvents): { listener: EventDatas.ChainEmitterHandler<TEvents, Record<string, unknown>, EventDatas.ChainCallbackResult>; priority: number }[] {
        const listeners = this._getListeners(event);
        if (listeners === undefined) {
            const throwMessage = this._config.getListenersOrThrow?.throwMessage?.(event);
            throw new Error(throwMessage);
        }
        return listeners;
    }

    protected _getAsyncListenersOrThrow(event: keyof TEvents): { listener: EventDatas.ChainEmitterAsyncHandler<TEvents, Record<string, unknown>, EventDatas.ChainCallbackResult>; priority: number }[] {
        const listeners = this._getAsyncListeners(event);
        if (listeners === undefined) {
            const throwMessage = this._config.getListenersOrThrow?.throwMessage?.(event);
            throw new Error(throwMessage);
        }
        return listeners;
    }

    on<TPayload extends Record<string, unknown>, TResult extends EventDatas.ChainCallbackResult<TPayload>>(event: keyof TEvents, listener: EventDatas.ChainEmitterHandler<TEvents, TPayload, TResult>, priority: number = 5): EventDatas.ChainOnResult<TEvents, TPayload, TResult> {
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

    onAsync<TPayload extends Record<string, unknown>, TResult extends EventDatas.ChainCallbackResult<TPayload>>(event: keyof TEvents, listener: EventDatas.ChainEmitterAsyncHandler<TEvents, TPayload, TResult>, priority: number = 5): EventDatas.ChainOnResult<TEvents, TPayload, TResult> {
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

    off<TPayload extends Record<string, unknown>, TResult extends EventDatas.ChainCallbackResult<TPayload>>(event: keyof TEvents, listener: EventDatas.ChainEmitterHandler<TEvents, TPayload, TResult>): void {
        if (!this._listeners.has(event)) {
            return;
        }
        const listeners = this._getListenersOrThrow(event);
        const newListeners = listeners.filter(x => x.listener !== listener);
        if (newListeners.length === 0) {
            this._listeners.delete(event);
        } else {
            this._listeners.set(event, newListeners);
        }
    }

    offAsync<TPayload extends Record<string, unknown>, TResult extends EventDatas.ChainCallbackResult<TPayload>>(event: keyof TEvents, listener: EventDatas.ChainEmitterAsyncHandler<TEvents, TPayload, TResult>): void {
        if (!this._asyncListeners.has(event)) {
            return;
        }
        const listeners = this._getAsyncListenersOrThrow(event);
        const newListeners = listeners.filter(x => x.listener !== listener);
        if (newListeners.length === 0) {
            this._asyncListeners.delete(event);
        } else {
            this._asyncListeners.set(event, newListeners);
        }
    }

    emit(event: keyof TEvents, data: TEvents[keyof TEvents]): void {
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
            } as TEvents[keyof TEvents];
        }
    }

    async emitAsync(event: keyof TEvents, data: TEvents[keyof TEvents]): Promise<void> {
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
            } as TEvents[keyof TEvents];
        }
        return;
    }

    once<TPayload extends Record<string, unknown>, TResult extends EventDatas.ChainCallbackResult<TPayload>>(event: keyof TEvents, listener: EventDatas.ChainEmitterHandler<TEvents, TPayload, TResult>, priority: number = 5): EventDatas.ChainOnceResult<TEvents, TPayload, TResult> {
        if (this._listeners.has(event)) {
            this._config.once?.notify?.(event);
            return;
        }
        return this.on(event, listener, priority);
    }

    onceAsync<TPayload extends Record<string, unknown>, TResult extends EventDatas.ChainCallbackResult<TPayload>>(event: keyof TEvents, listener: EventDatas.ChainEmitterAsyncHandler<TEvents, TPayload, TResult>, priority: number = 5): EventDatas.ChainOnceResult<TEvents, TPayload, TResult> {
        if (this._asyncListeners.has(event)) {
            this._config.once?.notify?.(event);
            return;
        }
        return this.onAsync(event, listener, priority);
    }
}