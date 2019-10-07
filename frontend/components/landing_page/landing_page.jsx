import React from 'react';
import { Link } from 'react-router-dom';
// import '../../../app/assets/images/shakespeare.png';
// import './landing_page.scss';

export default () => {
    // const display = state.currentUser ? (
    //     <div>
    //         {/* <p className="greeting">Hello, {state.currentUser.username} </p> */}
    //         <button className="logoutbtn" onClick={state.logout}>Log Out</button>
    //     </div>
    // ) : (
    //         <div>
    //             <Link className="loginbtn" to="/login">Log In</Link>
    //             <Link className="signupbtn" to="/signup">Sign Up</Link>
    //         </div>
    //     );

    return (
        <header className="landing-page">
            {/* <img src={window.img} className="mainlogo" /> */}
            {/* <Link className="logo" to="/">YoricksStacks</Link> */}
            {/* <p className="logo">Yoricks</p>
            <p className="logo2">Stacks</p> */}
            {/* <div>
                empty div
            </div> */}

            {/* <img src='../../../app/assets/shakespeare.png'></img> */}
            <img className="ludwig" src={window.img1}></img>
            <div className="description">We love people who wax philosophical</div>
            <div className="blurb">We're a question and answer site for the perennial questions of philosophy.</div>
            <Link className="browse" to='/questions'>Browse Questions</Link>
        </header>
    )


}