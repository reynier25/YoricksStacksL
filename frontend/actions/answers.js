import * as APIUtil from '../utils/answers';
export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';
export const RECEIVE_ANSWERS = 'RECEIVE_ANSWERS';

const receiveAnswer = answer => ({
    type: RECEIVE_ANSWER,
    answer
})

const receiveAnswers = answers => ({
    type: RECEIVE_ANSWERS,
    answers
})

export const postAnswer = (answer) => dispatch => (
    APIUtil.postAnswer(answer)
    .then(answer => dispatch(receiveAnswer(answer)))
)

export const fetchAnswer = (id) => dispatch => (
    APIUtil.fetchAnswer(id)
        .then(answer => dispatch(receiveAnswer(answer)))
)

export const fetchAnswers = () => dispatch => (
    APIUtil.fetchAnswers()
        .then(answers => dispatch(receiveAnswers(answers)))
)