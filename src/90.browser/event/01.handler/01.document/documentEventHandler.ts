export const events: {
    type: string;
    handler: (event: any) => void;
    throttle?: number;
    debounce?: number;
}[] = [
        {
            type: 'click',
            handler: onClick,
            throttle: 1000,
            debounce: 1000,
        },
        {
            type: 'keydown',
            handler: onKeyDown,
            throttle: 1000,
            debounce: 1000,
        },
        {
            type: 'keyup',
            handler: onKeyUp,
            throttle: 1000,
            debounce: 1000,
        },
        {
            type: 'keypress',
            handler: onKeyPress,
            throttle: 1000,
            debounce: 1000,
        },
        {
            type: 'input',
            handler: onInput,
            throttle: 1000,
            debounce: 1000,
        },
        {
            type: 'change',
            handler: onChange,
            throttle: 1000,
            debounce: 1000,
        },
        {
            type: 'submit',
            handler: onSubmit,
            throttle: 1000,
            debounce: 1000,
        },
        {
            type: 'reset',
            handler: onReset,
            throttle: 1000,
            debounce: 1000,
        },
        {
            type: 'drop',
            handler: onDrop,
            throttle: 1000,
            debounce: 1000,
        },
        {
            type: 'focus',
            handler: onFocus,
            throttle: 1000,
            debounce: 1000,
        },
        {
            type: 'blur',
            handler: onBlur,
            throttle: 1000,
            debounce: 1000,
        },
        {
            type: 'dragstart',
            handler: onDragStart,
            throttle: 1000,
            debounce: 1000,
        },
        {
            type: 'dragover',
            handler: onDragOver,
            throttle: 1000,
            debounce: 1000,
        },
        {
            type: 'dragend',
            handler: onDragEnd,
            throttle: 1000,
            debounce: 1000,
        },
        {
            type: 'scroll',
            handler: onScroll,
            throttle: 1000,
            debounce: 1000,
        },
        {
            type: 'wheel',
            handler: onWheel,
            throttle: 1000,
            debounce: 1000,
        },
        {
            type: 'pointerdown',
            handler: onPointerDown,
            throttle: 1000,
            debounce: 1000,
        },
        {
            type: 'pointerup',
            handler: onPointerUp,
            throttle: 1000,
            debounce: 1000,
        },
        {
            type: 'pointermove',
            handler: onPointerMove,
            throttle: 1000,
            debounce: 1000,
        },
        {
            type: 'pointerleave',
            handler: onPointerLeave,
            throttle: 1000,
            debounce: 1000,
        },
        {
            type: 'compositionstart',
            handler: onCompositionStart,
            throttle: 1000,
            debounce: 1000,
        },
        {
            type: 'compositionupdate',
            handler: onCompositionUpdate,
            throttle: 1000,
            debounce: 1000,
        },
        {
            type: 'compositionend',
            handler: onCompositionEnd,
            throttle: 1000,
            debounce: 1000,
        },
        {
            type: 'cut',
            handler: onCut,
            throttle: 1000,
            debounce: 1000,
        },
        {
            type: 'copy',
            handler: onCopy,
            throttle: 1000,
            debounce: 1000,
        },
        {
            type: 'paste',
            handler: onPaste,
            throttle: 1000,
            debounce: 1000,
        },
    ];

export function addEventHandlers(element: HTMLElement) {
    const destoryEventListeners: (() => void)[] = [];
    for (let i = 0, len = events.length; i < len; i++) {
        const event = events[i];
        if (event === undefined) continue;

        if (event.throttle) {
            // element.addEventListener(event.type, );
            // destoryEventListeners.push(() => {
            //     element.removeEventListener(event.type);
            // });
            // continue;
        }
        if (event.debounce) {
            // element.addEventListener(event.type, debounce(event.handler, event.debounce));
            // continue;
        }

        element.addEventListener(event.type, eventHandler);
        destoryEventListeners.push(() => {
            element.removeEventListener(event.type, eventHandler);
        });
    }
    return destoryEventListeners;
}

function eventHandler(event: Event) {
    try {
        const evtConfig = events.find(e => e.type === event.type);
        if (evtConfig && typeof evtConfig.handler === 'function') {
            evtConfig.handler(event);
        }
    } catch (error) {
        console.error(`Error handling event of type ${event.type}:`, error);
    }
}

function onClick(event: MouseEvent) {
    console.log('click');
    console.log(event);
}

function onKeyDown(event: KeyboardEvent) {
    if (document.activeElement != event.target) {
        (document.activeElement as HTMLElement).blur();
    }
    /**
     * 이전 작업 rendering 완료 후 실행
     */
    requestAnimationFrame(() => {
        console.log('keydown');
        console.log(event);
    });
}

function onKeyUp(event: KeyboardEvent) {
    console.log('keyup');
    console.log(event);
}

function onKeyPress(event: KeyboardEvent) {
    console.log('keypress');
    console.log(event);
}

function onInput(event: InputEvent) {
    console.log('input');
    console.log(event);
}

function onChange(event: Event) {
    console.log('change');
    console.log(event);
}

function onSubmit(event: SubmitEvent) {
    console.log('submit');
    console.log(event);
}

function onReset(event: Event) {
    console.log('reset');
    console.log(event);
}

function onDrop(event: DragEvent) {
    console.log('drop');
    console.log(event);
}

function onFocus(event: FocusEvent) {
    console.log('focus');
    console.log(event);
}

function onBlur(event: FocusEvent) {
    console.log('blur');
    console.log(event);
}

function onDragStart(event: DragEvent) {
    console.log('dragstart');
    console.log(event);
}

function onDragOver(event: DragEvent) {
    console.log('dragover');
    console.log(event);
}

function onDragEnd(event: DragEvent) {
    console.log('dragend');
    console.log(event);
}

function onScroll(event: WheelEvent) {
    console.log('scroll');
    console.log(event);
}

function onWheel(event: WheelEvent) {
    console.log('wheel');
    console.log(event);
}

function onPointerDown(event: PointerEvent) {
    (document.activeElement as HTMLElement)?.blur();
    requestAnimationFrame(() => {
        console.log('pointerdown');
        console.log(event);
    });
}

function onPointerUp(event: PointerEvent) {
    console.log('pointerup');

    console.log(event);
}

function onPointerMove(event: PointerEvent) {
    console.log('pointermove');
    console.log(event);
}

function onPointerLeave(event: PointerEvent) {
    console.log('pointerleave');
    console.log(event);
}

function onCompositionStart(event: CompositionEvent) {
    console.log('compositionstart');
    console.log(event);

}

function onCompositionUpdate(event: CompositionEvent) {
    console.log('compositionupdate');
    console.log(event);
}

function onCompositionEnd(event: CompositionEvent) {
    console.log('compositionend');
    console.log(event);
}

function onCut(event: CustomEvent) {
    console.log('cut');
    console.log(event);
}

function onCopy(event: CustomEvent) {
    console.log('copy');
    console.log(event);
}

function onPaste(event: CustomEvent) {
    console.log('paste');
    console.log(event);
}

