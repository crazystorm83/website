export type ChainCallbackResult<TPayload = Record<string, unknown>> = { 
    break?: boolean; 
    payload: TPayload;
};

export type ChainEmitterHandler<TEvents extends Record<string, Record<string, unknown>>, TPayload, TResult extends ChainCallbackResult<TPayload>> = 
    (data: TEvents[keyof TEvents]) => TResult;

export type ChainEmitterAsyncHandler<TEvents extends Record<string, Record<string, unknown>>, TPayload, TResult extends ChainCallbackResult<TPayload>> = 
    (data: TEvents[keyof TEvents]) => Promise<TResult>;

export interface IChainEmitterConfig<TEvents extends Record<string, Record<string, unknown>>> {
    emit?: {
        notify: (event: keyof TEvents) => void;
    };
    once?: {
        notify: (event: keyof TEvents) => void;
    };
    getListenersOrThrow?: {
        throwMessage: (event: keyof TEvents) => string;
    };
}

export type ChainOnResult<TEvents extends Record<string, Record<string, unknown>>, TPayload, TResult extends ChainCallbackResult<TPayload>> = 
    (() => void) | undefined;

export type ChainOnceResult<TEvents extends Record<string, Record<string, unknown>>, TPayload, TResult extends ChainCallbackResult<TPayload>> = 
    ChainOnResult<TEvents, TPayload, TResult>;

export interface IChainEmitter<TEvents extends Record<string, Record<string, unknown>>> {
    on<TPayload extends Record<string, unknown>, TResult extends ChainCallbackResult<TPayload>>(event: keyof TEvents, listener: ChainEmitterHandler<TEvents, TPayload, TResult>, priority?: number): ChainOnResult<TEvents, TPayload, TResult>;
    onAsync<TPayload extends Record<string, unknown>, TResult extends ChainCallbackResult<TPayload>>(event: keyof TEvents, listener: ChainEmitterAsyncHandler<TEvents, TPayload, TResult>, priority?: number): ChainOnResult<TEvents, TPayload, TResult>;
    off<TPayload extends Record<string, unknown>, TResult extends ChainCallbackResult<TPayload>>(event: keyof TEvents, listener: ChainEmitterHandler<TEvents, TPayload, TResult>): void;
    offAsync<TPayload extends Record<string, unknown>, TResult extends ChainCallbackResult<TPayload>>(event: keyof TEvents, listener: ChainEmitterAsyncHandler<TEvents, TPayload, TResult>): void;
    emit(event: keyof TEvents, data: TEvents[keyof TEvents]): void;
    emitAsync(event: keyof TEvents, data: TEvents[keyof TEvents]): Promise<void>;
    once<TPayload extends Record<string, unknown>, TResult extends ChainCallbackResult<TPayload>>(event: keyof TEvents, listener: ChainEmitterHandler<TEvents, TPayload, TResult>, priority?: number): ChainOnceResult<TEvents, TPayload, TResult>;
    onceAsync<TPayload extends Record<string, unknown>, TResult extends ChainCallbackResult<TPayload>>(event: keyof TEvents, listener: ChainEmitterAsyncHandler<TEvents, TPayload, TResult>, priority?: number): ChainOnceResult<TEvents, TPayload, TResult>;
}