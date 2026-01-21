import { IRegisterItem } from "../../01.browser_foundation/@types/data/Register";
import { InstanceStorage } from "../../01.browser_foundation/@types/data/storage/InstanceStorage";

export class EventInstanceStorage<T extends IRegisterItem> extends InstanceStorage<T> {
}