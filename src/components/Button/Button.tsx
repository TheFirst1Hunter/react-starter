import React, { ReactElement } from 'react';
import { ButtonProps } from './types';
import './style.module.css';
/**
 * @param {ButtonProps} props props of the button component
 * @returns {ReactElement} Button component
 */
const Button = (props: ButtonProps): ReactElement => <div>{props.text}</div>;

export default Button;
