function blurActiveElement() {
    (document.activeElement as HTMLElement)?.blur();
}

const rootElementEventListeners = [
    ['keydown', (event: KeyboardEvent) => {
        blurActiveElement();
        queueMicrotask(() => {
            console.log('keydown');
            console.log(event);
        });
    }],
    ['pointerdown', (event: PointerEvent) => {
        blurActiveElement();
        queueMicrotask(() => {
            console.log('pointerdown');
            console.log(event);
        });
    }],
    ['compositionstart', (event: CompositionEvent) => {
        console.log('compositionstart');
        console.log(event);
    }],
    // ['compositionupdate', (event: CompositionEvent) => {
    //     console.log(event);
    // }],
    ['compositionend', (event: CompositionEvent) => {
        console.log('compositionend');
        console.log(event);
    }],
    ['input', (event: InputEvent) => {
        console.log('input');
        console.log(event);
    }],
    ['click', (event: Event) => {
        console.log('click');
        console.log(event);
    }],
    ['cut', (event: CustomEvent) => {
        console.log('cut');
        console.log(event);
    }],
    ['copy', (event: CustomEvent) => {
        console.log('copy');
        console.log(event);
    }],
    ['dragstart', (event: CustomEvent) => {
        console.log('dragstart');
        console.log(event);
    }],
    ['dragover', (event: CustomEvent) => {
        console.log('dragover');
        console.log(event);
    }],    
    ['dragend', (event: CustomEvent) => {
        console.log('dragend');
        console.log(event);
    }],
    ['paste', (event: CustomEvent) => {
        console.log('paste');
        console.log(event);
    }],
    ['blur', (event: CustomEvent) => {
        console.log('blur');
        console.log(event);
    }],
    ['focus', (event: CustomEvent) => {
        console.log('focus');
        console.log(event);
    }],
    ['drop', (event: CustomEvent) => {
        console.log('drop');
        console.log(event);
    }],
]

export function addRootElementEventListeners(rootEl: HTMLElement, ignoreEvents: string[]) {
    const destoryEventListeners = [];
    for (const [eventName, handler] of rootElementEventListeners as [string, (eventName: Event) => void][]) {
        if (ignoreEvents.includes(eventName)) continue;
        rootEl.addEventListener(eventName, handler);
        destoryEventListeners.push(() => {
            rootEl.removeEventListener(eventName, handler);
        });
    }
    return destoryEventListeners;
}