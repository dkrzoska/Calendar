import React, {useState} from 'react'

function Login() {
    const [name, setName] = useState('username');

    const handleSetName = (ev) => {
        ev.preventDefault();
        setName(ev.target.value);
        window.localStorage.setItem('user', JSON.stringify(name));
    }

    return (
        <div>
            <form onSubmit = {handleSetName}>
                <input value = {name} type = 'text' placeholder = 'username'/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login