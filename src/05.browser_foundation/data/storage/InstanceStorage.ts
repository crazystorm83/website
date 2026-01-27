import { IInstanceStorage } from "../../@types/data/storage/IInstanceStorage";
import { Storage } from "./Storage";

export abstract class InstanceStorage<T> extends Storage<T> implements IInstanceStorage<T> {

}
