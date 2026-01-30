import { NodeIdentifiers, NodeSerialize } from "@primitive_types";
import { throwException } from "../05.browser_foundation/exception/ThrowException";
import { createEditor } from "./Editor";
// Node 클래스들을 import하여 @NHNode 데코레이터가 실행되도록 함
import "@browser_node";





// interface NodeStaticConfig {
//     $config: () => { type: string };
// }

// function getStaticNodeConfig(node: Klass<Node>) {

// }

const rootEl = document.querySelector<HTMLElement>('#root');

function execute() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);

        const originalMethod = descriptor.value;
        descriptor.value = function (...args: any[]) {
            return originalMethod.apply(this, args);
        };
        // workFlow.add({type: 'instance', modules: target, method: propertyKey, args: args});
        // return workFlow.execute();
    }
}


class NHRenderer {

}

type layout_type = 'header' | 'body' | 'footer';

const view_mapper = {
    menu_1: [
        {
            type: NodeIdentifiers.TableElementNodeIdentifier.type,
            sect_sid: 'table1',
            model_id: 'table1',
            attributes: [],
            children: [
                {
                    type: NodeIdentifiers.TheadElementNodeIdentifier.type,
                    sect_sid: 'table1_thead',
                    attributes: []
                },
                {
                    type: NodeIdentifiers.TbodyElementNodeIdentifier.type,
                    sect_sid: 'table1_tbody',
                    attributes: []
                },
                {
                    type: NodeIdentifiers.TfootElementNodeIdentifier.type,
                    sect_sid: 'table1_tfoot',
                    attributes: []
                }
            ]
        }
    ]
}

const definition_mapper = {
    table1: {
        props: [
            {
                prop_id: 'prod',
                data_type: '$$code',
                refer_type: 'prod',
            },
            {
                prop_id: 'cust',
                data_type: '$$code',
                refer_type: 'cust',
            },
            {
                prop_id: 'price',
                data_type: '$$decimal',
                refer_type: 'price',
            },
            {
                prop_id: 'qty',
                data_type: '$$numeric',
                refer_type: 'qty',
            },
            {
                prop_id: 'vat',
                data_type: '$$decimal',
                refer_type: 'vat',
            },
            {
                prop_id: 'desc',
                data_type: '$$txt',
                refer_type: 'desc',
            },
            {
                prop_id: 'write_dt',
                data_type: '$$date',
                refer_type: 'write_dt',
            }
        ],
        attributes: [
            {
                prop_id: 'prod',
                attr_id: 'display_name',
                attr_type: 'renderer',
                data: '품목'
            },
            {
                prop_id: 'cust',
                attr_id: 'display_name',
                attr_type: 'renderer',
                data: '거래처'
            },
            {
                prop_id: 'price',
                attr_id: 'display_name',
                attr_type: 'renderer',
                data: '단가'
            },
            {
                prop_id: 'qty',
                attr_id: 'display_name',
                attr_type: 'renderer',
                data: '수량'
            },
            {
                prop_id: 'vat',
                attr_id: 'display_name',
                attr_type: 'renderer',
                data: '부가세'
            },
            {
                prop_id: 'desc',
                attr_id: 'display_name',
                attr_type: 'renderer',
                data: '설명'
            },
            {
                prop_id: 'write_dt',
                attr_id: 'display_name',
                attr_type: 'renderer',
                data: '작성일시'
            },

            {
                prop_id: 'prod',
                attr_id: 'display_order',
                attr_type: 'renderer',
                data: '10'
            },
            {
                prop_id: 'cust',
                attr_id: 'display_order',
                attr_type: 'renderer',
                data: '20'
            },
            {
                prop_id: 'price',
                attr_id: 'display_order',
                attr_type: 'renderer',
                data: '30'
            },
            {
                prop_id: 'qty',
                attr_id: 'display_order',
                attr_type: 'renderer',
                data: '40'
            },
            {
                prop_id: 'vat',
                attr_id: 'display_order',
                attr_type: 'renderer',
                data: '50'
            },
            {
                prop_id: 'desc',
                attr_id: 'display_order',
                attr_type: 'renderer',
                data: '60'
            },
            {
                prop_id: 'write_dt',
                attr_id: 'display_order',
                attr_type: 'renderer',
                data: '70'
            },

            {
                prop_id: 'prod',
                attr_id: 'focus_order',
                attr_type: 'renderer',
                data: '10'
            },
            {
                prop_id: 'cust',
                attr_id: 'focus_order',
                attr_type: 'renderer',
                data: '20'
            },
            {
                prop_id: 'price',
                attr_id: 'focus_order',
                attr_type: 'renderer',
                data: '30'
            },
            {
                prop_id: 'qty',
                attr_id: 'focus_order',
                attr_type: 'renderer',
                data: '40'
            },
            {
                prop_id: 'vat',
                attr_id: 'focus_order',
                attr_type: 'renderer',
                data: '50'
            },
            {
                prop_id: 'desc',
                attr_id: 'focus_order',
                attr_type: 'renderer',
                data: '60'
            },
            {
                prop_id: 'write_dt',
                attr_id: 'focus_order',
                attr_type: 'renderer',
                data: '70'
            }
        ]
    }
}

const model_mapper = {
    table1: [
        {
            prod: '1001',
            cust: '1001',
            price: 10000,
            qty: 10,
            vat: 1000,
            desc: 'test',
            write_dt: '2025-01-01'
        },
        {
            prod: '1002',
            cust: '1002',
            price: 20000,
            qty: 20,
            vat: 2000,
            desc: 'test2',
            write_dt: '2025-01-02'
        },
        {
            prod: '1003',
            cust: '1003',
            price: 30000,
            qty: 30,
            vat: 3000,
            desc: 'test3',
            write_dt: '2025-01-03'
        }
    ]
}

const setup = {
    view_mapper,
    definition_mapper,
    model_mapper
}



const tableNode: NodeSerialize = {
    type: 'table',
    state: {},
    children: [
        {
            type: NodeIdentifiers.TheadElementNodeIdentifier.type,
            state: {},
            children: [
                {
                    'type': NodeIdentifiers.TableRowElementNodeIdentifier.type,
                    state: {},
                    'children': [
                        {
                            'type': NodeIdentifiers.TableCellElementNodeIdentifier.type,
                            state: {},
                            'children': []
                        },
                        {
                            'type': NodeIdentifiers.TableCellElementNodeIdentifier.type,
                            state: {},
                            'children': []
                        },
                        {
                            'type': NodeIdentifiers.TableCellElementNodeIdentifier.type,
                            state: {},
                            'children': []
                        }
                    ]
                }
            ]
        }
    ]
};
const rootNode: NodeSerialize = {
    type: NodeIdentifiers.RootElementNodeIdentifier.type,
    state: {},
    children: [
        {
            type: NodeIdentifiers.ToolbarElementNodeIdentifier.type,
            state: {},
            children: [
                {
                    type: NodeIdentifiers.ButtonElementNodeIdentifier.type,
                    state: {
                        display_name: 'Save',
                    },
                    children: []
                },
                {
                    type: NodeIdentifiers.ButtonElementNodeIdentifier.type,
                    state: {
                        display_name: 'Cancel',
                    },
                    children: []
                },
                {
                    type: NodeIdentifiers.ButtonElementNodeIdentifier.type,
                    state: {
                        display_name: 'Delete',
                    },
                    children: []
                },
                {
                    type: NodeIdentifiers.ButtonElementNodeIdentifier.type,
                    state: {
                        display_name: 'Add',
                    },
                    children: []
                },
                {
                    type: NodeIdentifiers.ButtonElementNodeIdentifier.type,
                    state: {
                        display_name: 'Edit',
                    },
                    children: []
                }
            ]
        },
        {
            type: NodeIdentifiers.FormListElementNodeIdentifier.type,
            state: {},
            children: [
                {
                    type: NodeIdentifiers.FormListLabelElementNodeIdentifier.type,
                    state: {},
                    children: [
                        {
                            type: NodeIdentifiers.LabelElementNodeIdentifier.type,
                            state: {
                                display_name: 'Name',
                            },
                            children: []
                        }
                    ]
                },
                {
                    type: NodeIdentifiers.FormListDataElementNodeIdentifier.type,
                    state: {},
                    children: [
                        {
                            type: NodeIdentifiers.InputElementNodeIdentifier.type,
                            state: {},
                            children: []
                        }
                    ]
                }
            ]
        },
        tableNode
    ]
}

const tableBodyNode: NodeSerialize = {
    type: NodeIdentifiers.TbodyElementNodeIdentifier.type,
    state: {},
    children: []
};
for (let rowIdx = 0; rowIdx < 1000; rowIdx++) {
    const tableRowNode: NodeSerialize = {
        type: NodeIdentifiers.TableRowElementNodeIdentifier.type,
        state: {},
        children: []
    };
    for (let colIdx = 0; colIdx < 100; colIdx++) {
        tableRowNode.children.push({
            type: NodeIdentifiers.TableCellElementNodeIdentifier.type,
            state: {},
            children: []
        });
    }
    tableBodyNode.children.push(tableRowNode);
}
tableNode.children.push(tableBodyNode);

if (rootEl === null) {
    throwException(false, 'rootEl is null');
}
interface IVoidProcessor {
    execute(): void;
}
interface IProcessor {
    execute<TPayload>(payload: TPayload): void;
}
interface IWorkFlow extends IVoidProcessor { }

class Workflow implements IWorkFlow {
    private tasks: { type: 'instance' | 'namespace' | 'resolve', modules: any, method: any, args: any }[] = [];
    add<TModule, TMethod extends keyof TModule>(payload: { type: 'instance' | 'namespace' | 'resolve', modules: TModule, method: TMethod, args: TModule[TMethod] extends (...args: any[]) => any ? Parameters<TModule[TMethod]> : never }) {
        this.tasks.push(payload);
    }

    private __clear() {
        this.tasks = [];
    }

    execute() {
        let task: any;
        while ((task = this.tasks.shift())) {
            if (Array.isArray(task.args)) {
                return task.modules[task.method].apply(task.modules, task.args);
            }
            return task.modules[task.method](task.args);
        }
        this.__clear();
    }
}

class Performance {

}

//rootEl?.appendChild(render(rootNode));
// NH.render(rootEl as HTMLElement, rootNode as NodeSerialize);

// const workFlow = new Workflow();
// const renderer = new NHRenderer();
// workFlow.add<typeof NHRenderer, 'render'>({type: 'instance', modules: NHRenderer, method: 'render', args: [rootEl as HTMLElement, rootNode as NodeSerialize]});
// workFlow.execute();
// const nodes: Klass<Node>[] = [
//     RootNode,

//     FormListDataElementNode,
//     FormListLabelElementNode,
//     FormListElementNode,

//     TableElementNode,
//     TableCellElementNode,
//     TableRowElementNode,
//     TbodyElementNode,
//     TfootElementNode,
//     TheadElementNode,

//     ToolbarElementNode,
//     ButtonElementNode,
//     LabelElementNode,
//     InputElementNode,
// ]
const editor = createEditor({
    // nodes: nodes,
    data: rootNode,
    event: {
        type: 'document'
    }
});

editor.setRootElement(rootEl);

interface ILogger {
}

enum MASK_LOG_LEVEL {
    NONE = 1,
    TRACE = 2,
    WARN = 4,
    ERROR = 8,
    INFO = 16,
    DEBUG = 32,
    LOG = 64,
}

class Logger implements ILogger {
    static level: MASK_LOG_LEVEL = MASK_LOG_LEVEL.NONE;
    static trace(...args: any[]) {
        if (this.level & MASK_LOG_LEVEL.TRACE) {
            console.trace(console, ...args);
        }
    }

    static warn(...args: any[]) {
        if (this.level & MASK_LOG_LEVEL.WARN) {
            console.warn(console, ...args);
        }
    }

    static error(...args: any[]) {
        if (this.level & MASK_LOG_LEVEL.ERROR) {
            console.error(console, ...args);
        }
    }

    static info(...args: any[]) {
        if (this.level & MASK_LOG_LEVEL.INFO) {
            console.info(console, ...args);
        }
    }

    static debug(...args: any[]) {
        if (this.level & MASK_LOG_LEVEL.DEBUG) {
            console.debug(console, ...args);
        }
    }

    static log(...args: any[]) {
        if (this.level & MASK_LOG_LEVEL.LOG) {
            console.log(console, ...args);
        }
    }
}