import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Header from './Header';
import style from './Header.module.css';

export default {
    title: 'Header',
    component: Header,
} as ComponentMeta<typeof Header>;

export const Primary = () => (
    <div
        id=''
        className={style.container}>
        <Header />
    </div>
);
