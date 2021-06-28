import React, { createContext } from 'react';
import { CounterState, initialCounterState } from './reducers/counterReducer';
import CounterActions from './actions/counterActions';

const Context = createContext<{ state: CounterState; dispatch: React.Dispatch<CounterActions> }>({
    state: initialCounterState,
    dispatch: () => undefined,
});

const useStore = () => {
    const context = React.useContext(Context);
    if (context === undefined) {
        throw new Error('useStore must be used within a Store provider');
    }

    return context;
};

export default useStore;
export { Context as CounterContext };
