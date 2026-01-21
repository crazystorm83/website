const UIdMap = new Map<string, number>();

export function createNodeSequentialUID(): string {
    const uidKey = 'node';
    return createSequentialUID(uidKey);
}

export function createElementSequentialUID(): string {
    const uidKey = 'element';
    return createSequentialUID(uidKey);
}

export function createEditorSequentialUID(): string {
    const uidKey = 'editor';
    return createSequentialUID(uidKey);
}

function createUID(): string {
    let uuid = 1;
    return (function () {
        //return Math.random().toString(36).substring(2, 15);
        return `uid-${uuid++}`;
    })()
}

function createSequentialUID(uidKey: 'node' | 'element' | 'editor'): string {
    const uid = UIdMap.get(uidKey) ?? 1;
    UIdMap.set(uidKey, uid + 1);
    return `${uidKey}-${uid}`;
}
