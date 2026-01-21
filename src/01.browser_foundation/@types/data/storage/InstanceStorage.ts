import { IStorage, Storage } from "./Storage";

export interface IInstanceStorage<T> extends IStorage<T> { }

export abstract class InstanceStorage<T> extends Storage<T> implements IInstanceStorage<T> {

}
