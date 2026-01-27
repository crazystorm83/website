import { IStorage } from "../../@types/data/storage/IStorage";
import { throwException } from "../../exception/ThrowException";
import { Register } from "../Register";

export abstract class Storage<T> extends Register<T> implements IStorage<T> {
    protected _instances: Map<string, T> = new Map();

    add<V extends T>(key: string, target: V): void {
        super.add(key, target);
    }

    get(key: string): T | undefined {
        const item = super.get(key);
        if (!item) return undefined;

        if (this._instances.has(key)) {
            return this._instances.get(key) as T;
        }

        const instance = new (item as any)();
        this._instances.set(key, instance);
        return instance;
    }
    getOrThrow(key: string): T {
        const item = this.get(key);
        if (!item) {
            throwException(false, `Item with key ${key} not found`);
        }
        return item;
    }
}