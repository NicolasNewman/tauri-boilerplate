import React from 'react';
import Counter from '../components/Counter';
import { Typography } from 'antd';

const { Title } = Typography;
interface IProps {
    loc: string;
}

const HomePage: React.FC<IProps> = ({ loc }: IProps) => {
    return (
        <div>
            <Title>Home page!</Title>
            <span>{loc}</span>
            <Counter />
        </div>
    );
};

export default HomePage;
