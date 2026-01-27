import { IInstanceStorage, throwException } from "@browser_foundation";
import { Node, nodeInstanceStorage } from "@browser_infra";
import { createEditorSequentialUID, createNodeSequentialUID } from "@foundation/utils";
import { ICommand, IEditor, NodeConfig, NodeConfigSerialize, NodeKey } from "@primitive_types";
import { EditorUpdate, EditorUpdateOptions, NodeSerialize } from "./@types";
import { addRootElementEventListeners } from "./events";
import { PerformanceMonitor } from "./performance";

function setDOMKey(node: NodeSerialize & NodeConfigSerialize, element: HTMLElement | DocumentFragment, editor: Editor) {
    const elementToMap = editor._elementToMap;
    if (element instanceof DocumentFragment) {
        for (const child of element.children) {
            setDOMKey(node, child as HTMLElement, editor);
        }
    } else {
        (element as unknown as { __NODE_KEY: string })['__NODE_KEY'] = node.__id;
        const elements = elementToMap.get(node.__id) ?? [];
        elements.push(element);
        elementToMap.set(node.__id, elements);
    }
}

export function createEditor(config: {
    data: NodeSerialize
}) {
    // const nodes = config.nodes;
    // const nodes = nodeInstanceStorage.getAll();

    const editor = new (getEditorClass())({
        data: config.data,
        nodes: nodeInstanceStorage
    });

    // editor.initializeNodes();

    return editor;
}

class EditorEvent {
    static _commands: Map<string, () => void> = new Map();
    static registCommand(command: ICommand, cb: () => void): () => void {
        this._commands.set(command.type, cb);

        return () => {
            console.log('registCommand');
        }
    }
}

const nodeKeyAndConfigMapper = new Map<NodeKey, NodeConfig>();

export class Editor implements IEditor {
    _key: string;

    _data: NodeSerialize;
    _nodes: IInstanceStorage<Node>;

    _nodeToMap: Map<string, NodeSerialize & NodeConfigSerialize> = new Map();
    _elementToMap: Map<string, HTMLElement[]> = new Map();

    _rootElement: HTMLElement | null;
    _destoryEventListeners: (() => void)[];

    _isUpdating: boolean;
    _updates: [EditorUpdate, EditorUpdateOptions | undefined][];
    constructor(config: {
        data: NodeSerialize;
        nodes: IInstanceStorage<Node>;
    }) {
        this._key = createEditorSequentialUID();

        this._data = config.data;
        // this._nodes = config.nodes;
        this._nodes = config.nodes;

        this._rootElement = null;
        this._destoryEventListeners = [];

        this._isUpdating = false;
        this._updates = [];
    }

    // initializeNodes(): void {
    //     for (let i = 0, len = this._nodes.length; i < len; i++) {
    //         const klass = this._nodes[i];
    //         if (klass === undefined) continue;

    //         const instNode = new klass();
    //         const nodeType = klass.getType();

    //         registedNodes[nodeType] = {
    //             node: klass,
    //             instNode: instNode
    //         };
    //     }
    // }

    registCommand!: (typeof EditorEvent)['registCommand'];

    removeEventListeners(): void {
        if (this._destoryEventListeners !== undefined) {
            let destoryEventListener;
            while (destoryEventListener = this._destoryEventListeners.shift()) {
                destoryEventListener();
            }
        }
    }

    addEventListeners(rootElement: HTMLElement): void {
        this._destoryEventListeners = addRootElementEventListeners(rootElement, []);
    }

    setRootElement(rootElement: HTMLElement): void {
        const prevRootElement = this._rootElement;

        if (prevRootElement === rootElement) return;

        this.removeEventListeners();
        this.render(rootElement, this._data);
        this.addEventListeners(rootElement);

        this._rootElement = rootElement;

        console.table(PerformanceMonitor.getReport());
    }

    render(parentEl: HTMLElement, config: NodeSerialize & Partial<NodeConfigSerialize>): void {
        // const registeredNode = registedNodes[config.type];
        // if (registeredNode === undefined) {
        //     throwException(false, `Node type ${config.type} is not registered`);
        // }
        // const { node: klass, instNode } = registeredNode;
        const nodeInstance = this._nodes.getOrThrow(config.type);

        config.__editorKey = this._key;
        config.__id = createNodeSequentialUID();

        nodeKeyAndConfigMapper.set(config.__id, config as NodeConfig);

        nodeInstance.setConfig(config);
        const rootEl = nodeInstance.createDOM();
        setDOMKey(config as NodeSerialize & NodeConfigSerialize, rootEl, this);

        this.renderChildren({
            parentEl: rootEl,
            parentConfig: config
        }, config.children);

        parentEl.appendChild(rootEl);
    }

    renderChildren({
        parentEl,
        parentConfig
    }: {
        parentEl: HTMLElement | DocumentFragment;
        parentConfig: NodeSerialize & Partial<NodeConfigSerialize>;
    }, configs: (NodeSerialize & Partial<NodeConfigSerialize>)[]) {
        for (let i = 0, len = configs.length; i < len; i++) {
            const config = configs[i];
            if (config === undefined) continue;

            const prevConfig = i === 0 ? null : configs[i - 1];

            // const registeredNode = registedNodes[config.type];
            // if (registeredNode === undefined) {
            //     throwException(false, `Node type ${config.type} is not registered`);
            // }
            // const { node: klass, instNode } = registeredNode;

            const nodeInstance = this._nodes.getOrThrow(config.type);

            config.__id = createNodeSequentialUID();
            config.__parent = parentConfig.__id ?? null;
            config.__prev = prevConfig?.__id ?? null;

            nodeInstance.setConfig(config);
            const childEl = nodeInstance.createDOM();
            setDOMKey(config as NodeSerialize & NodeConfigSerialize, childEl, this);

            this.renderChildren({
                parentEl: childEl,
                parentConfig: config
            }, config.children);

            parentEl.appendChild(childEl);
        }
    }
}

interface StateValueConfig<V> {
    parse(value?: unknown): V;
    unparse?: (value: V) => unknown;
    isEqual?: (a: V, b: V) => boolean;
}

class StateConfig<K extends string, V> {
    readonly key: K;

    readonly parse: (value?: unknown) => V;

    readonly unparse: (value: V) => unknown

    readonly isEqual: (a: V, b: V) => boolean;

    readonly defaultValue: V;

    constructor(key: K, value: StateValueConfig<V>) {
        this.key = key;
        this.parse = value.parse;
        this.unparse = value.unparse ?? ((value) => value);
        this.isEqual = value.isEqual ?? ((a: V, b: V) => a === b);
        this.defaultValue = this.parse(undefined);
    }
}

function createState<K extends string, V>(key: K, value: StateValueConfig<V>) {
    return new StateConfig(key, value);
}

const keyState = createState('key', {
    parse: (jsonValue: unknown) => jsonValue as string,
})

type ValueOrUpdater<V> = V | ((prev: V) => V);

function isUpdater<V>(valueOrUpdater: ValueOrUpdater<V>): valueOrUpdater is (prev: V) => V {
    return typeof valueOrUpdater === 'function';
}

function $setState<K extends string, V>(node: Node, stateConfig: StateConfig<K, V>, valueOrUpdater: ValueOrUpdater<V>): Node {
    let value: V;
    if (isUpdater(valueOrUpdater)) {
        const prevValue = $getState(node, stateConfig);
        value = valueOrUpdater(prevValue);
        if (stateConfig.isEqual(prevValue, value)) {
            return node;
        }
    } else {
        value = valueOrUpdater;
    }
    return node;
}

function $getState<K extends string, V>(node: Node, stateConfig: StateConfig<K, V>, version: 'latest' | 'direct' = 'latest'): V {
    const config = nodeKeyAndConfigMapper.get(node.__key);
    if (config === undefined) {
        throwException(false, `Node ${node.__key} is not found`);
    }
    return stateConfig.parse(config[stateConfig.key as keyof NodeConfig]);
}

function getEditorClass() {
    const __DEV = 'development';
    if (__DEV === 'development') {
        return PerformanceMonitor.wrap(Editor);
    }
    return Editor;
}