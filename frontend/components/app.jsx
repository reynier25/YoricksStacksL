import React from 'react';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import NavBarContainer from './nav_bar/nav_bar_container';


const App = () => (
    <div>
        <header>
            <h1></h1>
        </header>
        <Route path="/" component={NavBarContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
        <AuthRoute path="/signup" component={SignupContainer} />
        {/* <img src={window.img} alt=""/> */}
        
        {/* <Route path="/user" component={NavBarContainer} /> */}
    </div>
);

export default App;

/*{<AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />}*/