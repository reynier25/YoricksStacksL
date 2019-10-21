import { RECEIVE_VOTE, RECEIVE_VOTES, REMOVE_VOTE } from '../actions/votes';

export default (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_VOTE:
            return Object.assign({}, state, { [action.vote.user_id]: action.vote });
        case RECEIVE_VOTES:
            let question_votes = {};
            action.votes.forEach(vote => {
                question_votes[vote.user_id] = vote;
            });
            return question_votes;
        case REMOVE_VOTE:
            return {}
            //         let question_vote = {};
            // action.votes.forEach(vote => {
            //     question_vote[vote.user_id] = vote;
            // });
            // return question_vote;
        default:
            return state;

    }

}