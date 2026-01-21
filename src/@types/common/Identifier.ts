export type Identifier = { type: string };
export function createIdentifier<TResult extends Identifier> (name: string): TResult {
    return {
        type: name,
    } as TResult;
}