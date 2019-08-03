import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    const display = (
        <div>
            <Link className="home-tab" to="/questions">Home</Link>
            <br/>
            <Link className="home2-tab" to="/questions">Yoricks Stacks</Link>
            {/* <Link className="tags-tab" to="/">Sign Up</Link> */}
        </div>
    );

    return (
        <header className="left-nav-bar">
            {/* <img src={window.img} className="mainlogo" /> */}
            {/* <Link className="logo" to="/">YoricksStacks</Link> */}
            {/* <p className="logo">Yoricks</p> */}
            {/* <p className="logo2">Stacks</p> */}
            <div>
                {display}
            </div>
        </header>
    )


}