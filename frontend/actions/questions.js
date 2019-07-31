import * as APIUtil from '../utils/questions';
// postQuestion, fetchQuestions, fetchQuestion, deleteQuestion, updateQuestion
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

const receiveQuestion = question => ({
    type: RECEIVE_QUESTION,
    question
});

const receiveQuestions = questions => ({
    type: RECEIVE_QUESTIONS,
    questions
});

export const postQuestion = question => dispatch => (
    APIUtil.postQuestion(question)
        .then(question => dispatch(receiveQuestion(question)))
);

export const fetchQuestion = id => dispatch => (
    APIUtil.fetchQuestion(id)
        .then(question => dispatch(receiveQuestion(question)))
);

export const fetchQuestions = () => dispatch => (
    APIUtil.fetchQuestions()
        .then(questions => dispatch(receiveQuestions(questions)))
);

export const deleteQuestion = (id) => dispatch => (
    APIUtil.deleteQuestion(id)
        .then(question => dispatch(receiveQuestion(question)))
);

export const updateQuestion = (question) => dispatch => (
    APIUtil.updateQuestion(question)
        .then(question => dispatch(receiveQuestion(question)))
);