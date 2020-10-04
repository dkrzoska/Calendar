import React, { useState } from 'react';
import './header.css';

function Header({ displaylogin }) {
    const [login, setLogin] = useState("Login");

    return (
        <div className="header">
            <div className="logo"><img src={'../../../media/calendar--v2.png'} /></div>
            <ul className="menu">
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
            </ul>
            <p onClick={() => displaylogin()} className="login">{login}</p>
        </div>
    )
}

export default Header
