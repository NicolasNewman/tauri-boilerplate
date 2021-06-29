// import IState from './state';
import CounterAction, { CounterActionType } from '../actions/counterActions';
import { Reducer } from '../types';

export interface CounterState {
    value: number;
}

export const initialCounterState: CounterState = {
    value: 0,
};

const counter: Reducer<CounterState, CounterAction> = (state: CounterState, action: CounterAction): CounterState => {
    switch (action.type) {
        case CounterActionType.INCREMENT:
            return {
                ...state,
                value: state.value + 1,
            };
        case CounterActionType.DECREMENT:
            return {
                ...state,
                value: state.value - 1,
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
