import React from 'react';
import { ComponentMeta } from '@storybook/react';
import LoginForm from './Login-form';

export default {
    title: 'Login-form',
    component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

export const Primary = () => <LoginForm />;
