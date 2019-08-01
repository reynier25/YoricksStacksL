import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import questionsReducer from './questions_reducer';

export default combineReducers({
    users: usersReducer,
    questions: questionsReducer,
});