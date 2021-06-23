export enum ActionType {
    SET_ITEM = 'SET_ITEM',
    SET_SERVER = 'SET_SERVER',
}

interface SetItemAction {
    type: ActionType.SET_ITEM;
    item: string;
}

interface SetServerAction {
    type: ActionType.SET_SERVER;
    server: 'NA' | 'EU';
}

type Action = SetItemAction | SetServerAction;

export function SetItem(item: string): SetItemAction {
    return {
        type: ActionType.SET_ITEM,
        item,
    };
}

export function SetServer(server: 'NA' | 'EU'): SetServerAction {
    return {
        type: ActionType.SET_SERVER,
        server,
    };
}

export default Action;
