import { RECEIVE_ANSWER, RECEIVE_ANSWERS } from '../actions/answers';


export default (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
     
        case RECEIVE_ANSWER:
            return Object.assign({}, state, { [action.answer.id]: action.answer });
        case RECEIVE_ANSWERS:
            const answers = {};
            const x = action.answers;
            // debugger;
            action.answers.forEach(answer => {
                // if (answer.question_id === questionId) {
                    answers[answer.id] = answer;
                // }
                //question.ids (crappy key name) points to array containing indices of answers
            });
            return answers;
        default:
            return state
    }


}

