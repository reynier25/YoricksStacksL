import * as APIUtil from '../utils/question_tags';

export const RECEIVE_QUESTION_TAG = 'RECEIVE_QUESTION_TAG';

const receiveQuestionTag = questionTag => ({
    type: RECEIVE_QUESTION_TAG,
    questionTag
})

export const postQuestionTag = (questionTag) => dispatch => (
    APIUtil.postQuestionTag(questionTag)
        .then(questionTag => dispatch(receiveQuestionTag(questionTag)))
);


// type should be RECEIVE_QUESTION?