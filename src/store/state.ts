interface State {
    item: string | undefined;
    server: 'NA' | 'EU';
}

const initialState: State = {
    item: undefined,
    server: 'NA',
};

export default State;
export { initialState };
