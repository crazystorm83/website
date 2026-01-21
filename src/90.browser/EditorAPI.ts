import { EditorUpdate, EditorUpdateOptions } from "./@types";
import { Editor } from "./Editor";



function $beginUpdate(editor: Editor, update:EditorUpdate, updateOptions?: EditorUpdateOptions) {
    editor._isUpdating = true;

    try {
        update();
    } catch (error) {
        console.error(error);
    } finally {
        editor._isUpdating = false;
    }
}

export function updateEditorSync(editor: Editor, update:EditorUpdate, updateOptions?: EditorUpdateOptions) {
    if (updateOptions === undefined) {
        update();
    } else {
        $beginUpdate(editor, update, updateOptions);
    }
}

export function updateEditor(editor: Editor, update:EditorUpdate, updateOptions?: EditorUpdateOptions) {
    if (editor._isUpdating) {
        editor._updates.push([update, updateOptions]);
    } else {
        $beginUpdate(editor, update, updateOptions);
    }
}