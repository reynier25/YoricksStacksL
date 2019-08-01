import React from 'react';
import { Link } from 'react-router-dom';

export default (state) => {
    const display = state.currentUser ? (
        <div>
            <p className="greeting">Hello, {state.currentUser.username} </p>
            <button className="logoutbtn" onClick={state.logout}>Log Out</button>
        </div>
    ) : (
            <div>
                <Link className="loginbtn" to="/login">Log In</Link>
                <Link className="signupbtn" to="/signup">Sign Up</Link>
            </div>
        );

    return (
        <header className="nav-bar">
            <img src={window.img} className="mainlogo" />
            {/* <Link className="logo" to="/">YoricksStacks</Link> */}
            <h1 className="logo">Yoricks</h1>
            <h1 className="logo2">Stacks</h1>
            <div>
                {display}
            </div>
        </header>
    )


}