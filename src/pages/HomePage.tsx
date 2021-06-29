import React from 'react';
import Counter from '../components/Counter';

interface IProps {
    loc: string;
}

const HomePage: React.FC<IProps> = ({ loc }: IProps) => {
    return (
        <div>
            <h1>Home page!</h1>
            <span>{loc}</span>
            <Counter />
        </div>
    );
};

export default HomePage;
