// import IState from './state';
import CounterAction, { CounterActionType } from '../actions/counter';
import { Reducer } from '../store/types';

interface CounterState {
    value: number;
}

const counter: Reducer<CounterState, CounterAction> = (state: CounterState, action: CounterAction): CounterState => {
    switch (action.type) {
        case CounterActionType.INCREMENT:
            return {
                ...state,
                value: state.value++,
            };
        case CounterActionType.DECREMENT:
            return {
                ...state,
                value: state.value--,
            };
        case CounterActionType.ADD:
            return {
                ...state,
                value: state.value + action.value,
            };
        default:
            return state;
    }
};

export default counter;
