
export interface IRegisterItem {
    getType(): string;
}

export interface IRegister<T> {
    add(key: string, target: T): void;
    get(key: string): T | undefined;
    getOrThrow(key: string): T;
    getAll(): T[];
}