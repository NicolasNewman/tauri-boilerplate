export type State<T> = T;

export type Action<T> = {
    type: string;
} & T;

export type Reducer<S, A> = (state: State<S>, action: Action<A>) => State<S>;
