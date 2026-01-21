import type { Node } from '../90.browser/nodes/Node';

export type Spread<T1, T2> = Omit<T2, keyof T1> & T1;

// https://github.com/microsoft/TypeScript/issues/3841
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type KlassConstructor<Cls extends GenericConstructor<any>> =
  GenericConstructor<InstanceType<Cls>> & { [k in keyof Cls]: Cls[k] };
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GenericConstructor<T> = new (...args: any[]) => T;

type NodeWithConstructor = Node & { constructor: GenericConstructor<Node> };
export type Klass<T extends Node> = InstanceType<
  (T & NodeWithConstructor)['constructor']
> extends T
  ? (T & NodeWithConstructor)['constructor']
  : GenericConstructor<T> & (T & NodeWithConstructor)['constructor'];