import React, { ReactElement, useState, ChangeEvent } from 'react';
import './Login-form.module.css';

/**
 * @fromComponent
 * @returns {ReactElement} Login-form form component
 */
const LoginForm = (): ReactElement => {
    const [username, setUsername] = useState<string>('username');
    const [password, setPassword] = useState<string>('password');

    return (
        <form>
            <h3>Login-form</h3>
            <input
                type={'text'}
                name='username'
                placeholder='username'
                value={username}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setUsername(event.target.value)
                }
            />

            <input
                type={'text'}
                name='password'
                placeholder='password'
                value={password}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setPassword(event.target.value)
                }
            />

            <button>login</button>
        </form>
    );
};

export default LoginForm;
