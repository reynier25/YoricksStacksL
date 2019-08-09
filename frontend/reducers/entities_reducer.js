import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import questionsReducer from './questions_reducer';
import answersReducer from './answers_reducer';
import tagsReducer from './tags_reducer';
import questionVotesReducer from './question_votes_reducer';

export default combineReducers({
    users: usersReducer,
    questions: questionsReducer,
    answers: answersReducer,
    tags: tagsReducer,
    questionVotes: questionVotesReducer
});