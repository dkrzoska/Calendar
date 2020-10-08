import React, { useState } from 'react';
import Login from '../Login/Login';
import './header.scss';

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
            <div className="header__logo"><img src={'../../../media/calendar.png'} /></div>
            <ul className="header__menu">
                <li className="header__menu__showall"><strong>Show all tasks</strong></li>
            </ul>
            <strong onClick={() => handleShowLoginScreen()} className="header__login">{login}</strong>
            {loginscreen && <Login handleSetLogin={handleSetLogin}/>}
        </div>
    )
}

export default Header
