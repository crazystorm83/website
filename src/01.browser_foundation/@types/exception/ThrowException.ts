export function throwException(condition: boolean,message: string): asserts condition {
    if (condition) {
        return;
    }
    
    throw new Error(message);
}