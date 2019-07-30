import React from 'react';
import SignupContainer from './session/signup_container';
import { Route } from 'react-router-dom';
// import { AuthRoute } from '../util/route_util';
import NavBarContainer from './nav_bar/nav_bar_container';

const App = () => (
    <div>
        <header>
            <h1>Yoricks Stacks</h1>
        </header>

        <Route path="/signup" component={SignupContainer} />
        <Route path="/" component={NavBarContainer} />
        {/* <Route path="/user" component={NavBarContainer} /> */}
    </div>
);

export default App;

/*{<AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />}*/