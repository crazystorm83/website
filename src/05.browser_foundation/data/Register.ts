import { IRegister } from "../@types";
import { throwException } from "../exception/ThrowException";


export class Register<T> implements IRegister<T> {
    __items: Map<string, T> = new Map();
    add<V extends T>(key: string, target: V): void {
        this.__items.set(key, target);
    }

    get(key: string): T | undefined {
        return this.__items.get(key);
    }

    getOrThrow(key: string): T {
        const item = this.get(key);
        if (!item) {
            throwException(false, `Item with key ${key} not found`);
        }
        return item;
    }

    getAll(): T[] {
        return Array.from(this.__items.values());
    }
}

