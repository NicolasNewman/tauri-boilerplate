export enum CounterActionType {
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT',
    ADD = 'ADD',
}

interface IncrementAction {
    type: CounterActionType.INCREMENT;
}

interface DecrementAction {
    type: CounterActionType.DECREMENT;
}

interface AddAction {
    type: CounterActionType.ADD;
    value: number;
}

type CounterAction = IncrementAction | DecrementAction | AddAction;

export function increment(): IncrementAction {
    return {
        type: CounterActionType.INCREMENT,
    };
}

export function decrement(): DecrementAction {
    return {
        type: CounterActionType.DECREMENT,
    };
}

export function add(value: number): AddAction {
    return {
        type: CounterActionType.ADD,
        value,
    };
}

export default CounterAction;
