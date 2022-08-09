import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Button from './Button';
import { ButtonProps } from './Button.types';

export default {
    title: 'Button',
    component: Button,
} as ComponentMeta<typeof Button>;

export const Primary = (args: ButtonProps) => <Button {...args} />;
