
import React from 'react';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import QuestionIndexContainer from './questions/question_index_container';
import QuestionShowContainer from './questions/question_show_container';
// import QuestionShow from './questions/question_show';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import NavBarContainer from './nav_bar/nav_bar_container';
import LeftNavBarContainer from './nav_bar/left_nav_bar_container';
import QuestionNew from './questions/question_new';
import QuestionNewContainer from './questions/question_new_container';
import AnswerIndexContainer from './answers/answer_index_container';
import AnswerNewContainer from './answers/answer_new_container';
import TagIndexContainer from './tags/tag_index_container';
import TagShowContainer from './tags/tag_show_container';

import QuestionEditContainer from './questions/question_edit_container';
import AnswerEditContainer from './answers/answer_edit_container';

import LandingPageContainer from './landing_page/landing_page_container';

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
        {/* <Route exact path="/questions/:questionId" component={AnswerIndexContainer} /> */}

        <Route exact path="/" component={LandingPageContainer} />

        <Switch>
            <AuthRoute path="/login" component={LoginContainer} />
            <AuthRoute path="/signup" component={SignupContainer} />
            <Route exact path="/questions" component={QuestionIndexContainer} />
            <Route exact path="/tags" component={TagIndexContainer} />

            <Route exact path="/questions/:questionId" component={QuestionShowContainer} />
            <Route exact path="/questions/:questionId/edit" component={QuestionEditContainer} />
            <Route exact path="/answers/:answerId/edit" component={AnswerEditContainer} />


            <Route exact path="/tags/:tagId" component={TagShowContainer} />

            <ProtectedRoute exact path="/newquestion" component={QuestionNewContainer} />

            {/* <Route path="/questions/:questionId" render={(props) => <QuestionShow {...props} />} /> */}
            {/* <ProtectedRoute path="/newquestion" component={QuestionNewContainer} /> */}

        </Switch>
        {/* <Route exact path="/questions/:questionId" component={AnswerIndexContainer} /> */}
        {/* <Route exact path="/questions/:questionId" component={AnswerNewContainer} /> */}
        {/* <img src={window.img} alt=""/> */}

        {/* <Route path="/user" component={NavBarContainer} /> */}
    </div>
);

export default App

/*{<AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />}*/