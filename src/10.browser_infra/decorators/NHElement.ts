import { Identifier, IElement } from "@primitive_types";
import { ElementInstanceStorage } from "../datas";

export const elementInstanceStorage = new ElementInstanceStorage<any>();

export function NHElement({
    identifier,
}: {
    identifier: Identifier;
}) {
    return <T extends abstract new (...args: any[]) => IElement>(constructor: T): void => {
        elementInstanceStorage.add(identifier.type, constructor);
    }
}
