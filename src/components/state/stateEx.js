import React, { useState } from "react";

const StateEx = () => {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    function handlesubmit(e){
        e.preventDefault();
        console.log("Username", username, "Password", password);
    }
    return(
        <div>
            <h2>State Example</h2>

            <form onSubmit={handlesubmit}>
                <lable>Username:</lable>
                <input type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <label>Password</label>
                <input type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default StateEx;