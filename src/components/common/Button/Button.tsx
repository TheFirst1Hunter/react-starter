import React, { ReactElement } from 'react';
import { ButtonProps } from './Button.types';
import './Button.module.css';
/**
 * @commonComponent
 * @param {ButtonProps} props props of the button component
 * @returns {ReactElement} Button component
 */
const Button = (props: ButtonProps): ReactElement => <div>{props.text}</div>;

export default Button;
