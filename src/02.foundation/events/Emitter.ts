import { EventDatas } from "@primitive_types";

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
export abstract class Emitter<TEvents extends Record<string, unknown>> implements EventDatas.IEmitter<TEvents> {
    protected _listeners: Map<keyof TEvents, { listener: EventDatas.EmitterHandler<TEvents, any>, priority: number }[]> = new Map();
    protected _asyncListeners: Map<keyof TEvents, { listener: EventDatas.EmitterAsyncHandler<TEvents, any>, priority: number }[]> = new Map();

    protected _config: EventDatas.IEmitterConfig<TEvents>;

    constructor(config: EventDatas.IEmitterConfig<TEvents>) {
        this._listeners = new Map();
        this._config = config;
    }

    protected _getListeners(event: keyof TEvents): { listener: EventDatas.EmitterHandler<TEvents, any>, priority: number }[] | undefined {
        return this._listeners.get(event);
    }
    protected _getListenersOrThrow(event: keyof TEvents): { listener: EventDatas.EmitterHandler<TEvents, any>, priority: number }[] {
        const listeners = this._getListeners(event);
        if (listeners === undefined) {
            const throwMessage = this._config.getListenersOrThrow?.throwMessage?.(event);
            throw new Error(throwMessage);
        }
        return listeners;
    }
    on<TResult extends EventDatas.CallbackResult>(event: keyof TEvents, listener: EventDatas.EmitterHandler<TEvents, TResult>, priority: number = 50): EventDatas.OnResult<TResult> {
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
            this.off<TResult>(event, listener);
        }) as EventDatas.OnResult<TResult>;
    }
    onAsync<TResult extends EventDatas.CallbackResult>(event: keyof TEvents, listener: EventDatas.EmitterAsyncHandler<TEvents, TResult>, priority: number = 50): EventDatas.OnAsyncResult<TResult> {
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
            this.offAsync<TResult>(event, listener);
        }) as EventDatas.OnAsyncResult<TResult>;
    }
    off<TResult extends EventDatas.CallbackResult>(event: keyof TEvents, listener: EventDatas.EmitterHandler<TEvents, TResult>): void {
        if (!this._listeners.has(event)) {
            return;
        }
        const listeners = this._getListenersOrThrow(event);
        const new_listeners = listeners.filter(x => x.listener !== listener);
        if (new_listeners.length === 0) {
            this._listeners.delete(event);
        } else {
            this._listeners.set(event, new_listeners);
        }
    }
    offAsync<TResult extends EventDatas.CallbackResult>(event: keyof TEvents, listener: EventDatas.EmitterAsyncHandler<TEvents, TResult>): void {
        if (!this._asyncListeners.has(event)) {
            return;
        }
        const listeners = this._getListenersOrThrow(event);
        const new_listeners = listeners.filter(x => x.listener !== listener);
        if (new_listeners.length === 0) {
            this._asyncListeners.delete(event);
        }
    }
    emit(event: keyof TEvents, data: TEvents[keyof TEvents]): void {
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
    async emitAsync(event: keyof TEvents, data: TEvents[keyof TEvents]): Promise<void> {
        const listeners = this._asyncListeners.get(event);
        if (!listeners) {
            this._config.emit?.notify?.(event);
        } else {
            for (const listener of listeners) {
                const result = await listener.listener(data);
                if (result?.break) {
                    break;
                }
            }
        }
    }
    once<TResult extends EventDatas.CallbackResult>(event: keyof TEvents, listener: EventDatas.EmitterHandler<TEvents, TResult>, priority: number = 50): EventDatas.OnceResult<TResult> {
        if (this._listeners.has(event)) {
            this._config.once?.notify?.(event);
            return;
        } else {
            return this.on(event, listener, priority);
        }
    }
    onceAsync<TResult extends EventDatas.CallbackResult>(event: keyof TEvents, listener: EventDatas.EmitterAsyncHandler<TEvents, TResult>, priority: number = 50): EventDatas.OnceAsyncResult<TResult> {
        if (this._asyncListeners.has(event)) {
            this._config.once?.notify?.(event);
            return;
        }
        return this.onAsync(event, listener, priority);
    }
}