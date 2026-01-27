import { EventHandlers } from "@primitive_types";

export abstract class ElementNodeEventHandler extends EventHandlers.BrowserEventHandler {
    handleMouseEvent(event: MouseEvent): void {
        throw new Error("Method not implemented.");
    }
    handleKeyboardEvent(event: KeyboardEvent): void {
        throw new Error("Method not implemented.");
    }
    handleTouchEvent(event: TouchEvent): void {
        throw new Error("Method not implemented.");
    }
    handleWheelEvent(event: WheelEvent): void {
        throw new Error("Method not implemented.");
    }
    handleFocusEvent(event: FocusEvent): void {
        throw new Error("Method not implemented.");
    }
    handleBlurEvent(event: FocusEvent): void {
        throw new Error("Method not implemented.");
    }
    handleChangeEvent(event: InputEvent): void {
        throw new Error("Method not implemented.");
    }
    handleSubmitEvent(event: SubmitEvent): void {
        throw new Error("Method not implemented.");
    }
    handleResetEvent(event: Event): void {
        throw new Error("Method not implemented.");
    }
    handleDragEvent(event: DragEvent): void {
        throw new Error("Method not implemented.");
    }
    handleDropEvent(event: DragEvent): void {
        throw new Error("Method not implemented.");
    }
    handleScrollEvent(event: WheelEvent): void {
        throw new Error("Method not implemented.");
    }
}