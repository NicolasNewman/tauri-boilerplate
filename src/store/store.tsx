import React, { useReducer } from 'react';
import { CounterContext } from './counter';
import counter, { initialCounterState } from './reducers/counterReducer';

const Store: React.FC = ({ children }) => {
    const [counterState, counterDispatch] = useReducer(counter, initialCounterState);
    return (
        <CounterContext.Provider value={{ state: counterState, dispatch: counterDispatch }}>
            {children}
        </CounterContext.Provider>
    );
};

export default Store;
