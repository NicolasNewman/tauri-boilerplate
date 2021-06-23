import IState from './state';
import Action, { ActionType } from './action';

const Reducer = (state: IState, action: Action): IState => {
    switch (action.type) {
        case ActionType.SET_ITEM:
            return {
                ...state,
                item: action.item,
            };
        case ActionType.SET_SERVER:
            return {
                ...state,
                server: action.server,
            };
        default:
            return state;
    }
};

export default Reducer;
