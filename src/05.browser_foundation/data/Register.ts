import { throwException } from "../exception/ThrowException";

export interface IRegisterItem {
    getType(): string;
}

export interface IRegister<T> {
    add(key: string, target: T): void;
    get(type: string): T | undefined;
    getOrThrow(type: string): T;
    getAll(): T[];
}
export class Register<T> implements IRegister<T> {
    __items: Map<string, T> = new Map();
    add<V extends T>(key: string, target: V): void {
        this.__items.set(key, target);
    }

    get(type: string): T | undefined {
        return this.__items.get(type);
    }

    getOrThrow(type: string): T {
        const item = this.get(type);
        if (!item) {
            throwException(false, `Item with type ${type} not found`);
        }
        return item;
    }

    getAll(): T[] {
        return Array.from(this.__items.values());
    }
}

