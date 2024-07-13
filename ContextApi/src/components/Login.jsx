import React, { useContext, useState } from 'react';
import UserContext from '../context/userContext';

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useContext(UserContext);

    const submitButton = (e) => {
        e.preventDefault();
        setUser({userName, password});
    };

    return (
        <form onSubmit={submitButton}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;
