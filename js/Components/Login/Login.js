import React, { useState } from 'react';
import './login.css';

function Login({ handleSetLogin }) {
    const [username, setUsername] = useState('');

    const handleSetUserName = ev => {
        setUsername(ev.target.value);
    }

    return (
        <div className="login">
            <form onSubmit={ev => handleSetLogin(ev, username)}>
                <input onChange={handleSetUserName} value={username} type='text' placeholder='username' />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login