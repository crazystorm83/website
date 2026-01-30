export type CallbackResult = { break?: boolean };

export type EmitterHandler<TEvents extends Record<string, unknown>, TResult extends CallbackResult> = (data: TEvents[keyof TEvents]) => TResult;
export type EmitterAsyncHandler<TEvents extends Record<string, unknown>, TResult extends CallbackResult> = (data: TEvents[keyof TEvents]) => Promise<TResult>;

export interface IEmitterConfig<TEvents extends Record<string, unknown>> {
    emit?: {
        notify: (event: keyof TEvents) => void
    }
    once?: {
        notify: (event: keyof TEvents) => void
    };
    getListenersOrThrow?: {
        throwMessage: (event: keyof TEvents) => string;
    }
    throw?: (event: keyof TEvents) => never;
}

export type OnResult<TResult extends CallbackResult> = (() => TResult) | undefined;
export type OnAsyncResult<TResult extends CallbackResult> = OnResult<TResult>

export type OnceResult<TResult extends CallbackResult> = (() => TResult) | undefined;
export type OnceAsyncResult<TResult extends CallbackResult> = OnceResult<TResult>

export interface IEmitter<TEvents extends Record<string, unknown>> {
    on<TResult extends CallbackResult>(event: keyof TEvents, listener: EmitterHandler<TEvents, TResult>, priority: number): OnResult<TResult>;
    onAsync<TResult extends CallbackResult>(event: keyof TEvents, listener: EmitterAsyncHandler<TEvents, TResult>, priority: number): OnAsyncResult<TResult>;
    off<TResult extends CallbackResult>(event: keyof TEvents, listener: EmitterHandler<TEvents, TResult>): void;
    offAsync<TResult extends CallbackResult>(event: keyof TEvents, listener: EmitterAsyncHandler<TEvents, TResult>): void;
    emit(event: keyof TEvents, data: TEvents[keyof TEvents]): void;
    emitAsync(event: keyof TEvents, data: TEvents[keyof TEvents]): Promise<void>;
    once<TResult extends CallbackResult>(event: keyof TEvents, listener: EmitterHandler<TEvents, TResult>, priority: number): OnceResult<TResult>;
    onceAsync<TResult extends CallbackResult>(event: keyof TEvents, listener: EmitterAsyncHandler<TEvents, TResult>, priority: number): OnceAsyncResult<TResult>;
}