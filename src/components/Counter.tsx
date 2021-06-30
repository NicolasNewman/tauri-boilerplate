import React from 'react';
import { Button } from 'antd';
import useStore from '../store/counter';
import { increment, decrement } from '../store/actions/counterActions';

const HomePage: React.FC = () => {
    const { state, dispatch } = useStore();

    const inc = () => {
        dispatch(increment());
    };

    const dec = () => {
        dispatch(decrement());
    };

    return (
        <div>
            <div className="w-min flex items-center border-black border border-solid p-1">
                <Button type="primary" onClick={inc}>
                    +
                </Button>
                <span className="mx-2">{state.value}</span>
                <Button type="primary" onClick={dec}>
                    -
                </Button>
            </div>
        </div>
    );
};

export default HomePage;
