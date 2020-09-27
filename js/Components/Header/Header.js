import React, { useState } from 'react';
import './header.css'

function Header({ displaylogin }) {
    const [login, setLogin] = useState("Login");

    return (
        <div className="header">
            <p className="logo">Logo</p>
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
