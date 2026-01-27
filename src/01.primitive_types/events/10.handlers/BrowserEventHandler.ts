import { EventHandler } from "./EventHandler";

export abstract class BrowserEventHandler extends EventHandler {
    abstract handleMouseEvent(event: MouseEvent): void;
    abstract handleKeyboardEvent(event: KeyboardEvent): void;
    abstract handleTouchEvent(event: TouchEvent): void;
    abstract handleWheelEvent(event: WheelEvent): void;
    abstract handleFocusEvent(event: FocusEvent): void;
    abstract handleBlurEvent(event: FocusEvent): void;
    abstract handleChangeEvent(event: InputEvent): void;
    abstract handleSubmitEvent(event: SubmitEvent): void;
    abstract handleResetEvent(event: Event): void;
    abstract handleDragEvent(event: DragEvent): void;
    abstract handleDropEvent(event: DragEvent): void;
    abstract handleScrollEvent(event: WheelEvent): void;
}