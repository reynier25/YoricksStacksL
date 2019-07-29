import React from 'react';
import SignupContainer from './session/signup_container';
import { Route } from 'react-router-dom';
// import { AuthRoute } from '../util/route_util';

const App = () => (
    <div>
        <header>
            <h1>Yoricks Stacks</h1>
        </header>

        <Route exact path="/" component={SignupContainer} />
    </div>
);

export default App;

/*{<AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />}*/