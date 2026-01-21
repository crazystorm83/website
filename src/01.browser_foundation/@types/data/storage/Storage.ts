import { throwException } from "../../exception/ThrowException";
import { IRegister, Register } from "../Register";

export interface IStorage<T> extends IRegister<T> { }

export abstract class Storage<T> extends Register<T> implements IStorage<T> {
    protected _instances: Map<string, T> = new Map();

    add<V extends T>(target: V): void {
        super.add(target);
    }

    get(type: string): T | undefined {
        const item = super.get(type);
        if (!item) return undefined;

        if (this._instances.has(type)) {
            return this._instances.get(type) as T;
        }

        const instance = new (item as any)();
        this._instances.set(type, instance);
        return instance;
    }
    getOrThrow(type: string): T {
        const item = this.get(type);
        if (!item) {
            throwException(false, `Item with type ${type} not found`);
        }

        if (this._instances.has(type)) {
            return this._instances.get(type) as T;
        }
        const instance = new (item as any)();
        this._instances.set(type, instance);
        return instance;
    }
}