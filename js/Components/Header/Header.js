import React, { useState } from 'react';
import Login from '../Login/Login';
import './header.css';

function Header() {
    const [loginscreen, showLoginScreen] = useState(false);
    const [login, setLogin] = useState('Login');

    const handleSetLogin = (ev, name) => {
        ev.preventDefault();
        name != '' ? setLogin(name) : setLogin('Login');
        showLoginScreen(false);
    }

    const handleShowLoginScreen = () => {
        showLoginScreen(true);
    }

    return (
        <div className="header">
            <div className="logo"><img src={'../../../media/calendar--v2.png'} /></div>
            <ul className="menu">
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
            </ul>
            <p onClick={() => handleShowLoginScreen()} className="header__login">{login}</p>
            {loginscreen && <Login handleSetLogin={handleSetLogin}/>}
        </div>
    )
}

export default Header
