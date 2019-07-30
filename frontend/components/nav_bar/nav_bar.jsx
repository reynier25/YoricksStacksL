import React from 'react';
import { Link } from 'react-router-dom';

export default (state) => {
    const display = state.currentUser ? (
        <div>
            <p>Hello, {state.currentUser.username} </p>
            <button onClick={state.logout}>Log Out</button>
        </div>
    ) : (
            <div>
                <Link className="btn" to="/signup">Sign Up</Link>
                <br/>
                <Link className="btn" to="/login">Log In</Link>
            </div>
    );
    
    return (
        <header className="nav-bar">
            <h1 className="logo">YoricksStacks</h1>
            <div>
                {display}
            </div>
        </header>
    )


}