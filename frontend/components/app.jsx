
import React from 'react';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import QuestionIndexContainer from './questions/question_index_container';
import QuestionShowContainer from './questions/question_show_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import NavBarContainer from './nav_bar/nav_bar_container';
import LeftNavBarContainer from './nav_bar/left_nav_bar_container';
import QuestionNewContainer from './questions/question_new_container';
import LeftNavBar from './nav_bar/left_nav_bar';
import { withRouter } from 'react-router'

// render = {(props) => <Navigation {...props}

const App = () => (
    <div>
        {/* <header>
            <h1></h1>
        </header> */}
        {/* {location.pathname !== '/login'} */}
        <Route path="/" component={NavBarContainer} />
        <Route path="/" component={LeftNavBarContainer} />
        {/* <Route path="/" render={(props) => <LeftNavBar {...props} />} /> */}

        
        <Switch>
            <AuthRoute path="/login" component={LoginContainer} />
            <AuthRoute path="/signup" component={SignupContainer} />
            <Route exact path="/questions" component={QuestionIndexContainer} />
            <Route path="/questions/:questionId" component={QuestionShowContainer} />
            <ProtectedRoute path="/newquestion" component={QuestionNewContainer}/>

        </Switch>
        {/* <img src={window.img} alt=""/> */}

        {/* <Route path="/user" component={NavBarContainer} /> */}
    </div>
);

export default App

/*{<AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />}*/