import { IRegisterItem } from "../../05.browser_foundation/@types/data/IRegister";
import { InstanceStorage } from "../../05.browser_foundation/data/storage/InstanceStorage";

export class EventInstanceStorage<T extends IRegisterItem> extends InstanceStorage<T> {
}