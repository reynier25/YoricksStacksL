import { RECEIVE_TAG } from '../actions/tags';


export default (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_TAG:
            return Object.assign({}, state, { [action.questionTag.id]: action.questionTag });
        // case RECEIVE_QUESTIONS:
        //     const questions = {};
        //     action.questions.forEach(question => {
        //         questions[question.id] = question;
        //     });
        //     return questions;
        default:
            return state
    }


}

