import React, { createContext, useReducer } from 'react';
// import Action from './action';
// import Reducer from './reducer';
// import State, { initialState } from './state';
import { Action, State, Reducer } from './types';
import counter from '../reducers/counter';

const combineReducers = (slices: { [key: string]: Reducer<any, any> }) => {
    return (prevState: State<any>, action: Action<any>): State<any> => {
        return Object.keys(slices).reduce((nextState: any, nextProp) => ({
            ...nextState,
            [nextProp]: slices[nextProp](prevState[nextProp], action),
            prevState,
        })) as unknown as State<any>;
    };
};

const initialState = {};

const rootReducer = combineReducers({ counter });

const Context = createContext<{ state: State<any>; dispatch: React.Dispatch<Action<any>> }>({
    state: initialState,
    dispatch: () => undefined,
});

const Store: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(rootReducer, initialState);
    const store = React.useMemo<any>(() => [state, dispatch], [state]);
    return <Context.Provider value={store}>{children}</Context.Provider>;
};

const useStore = () => {
    const context = React.useContext(Context);
    if (context === undefined) {
        throw new Error('useStore must be used within a Store provider');
    }

    return context;
};

export default useStore;
export { Store };
