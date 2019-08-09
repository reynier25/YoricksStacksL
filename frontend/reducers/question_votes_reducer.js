import { RECEIVE_VOTE, RECEIVE_VOTES } from '../actions/votes';

export default (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_VOTE:
            return Object.assign({}, state, { [action.vote.user_id]: action.vote.upvoted });
        case RECEIVE_VOTES:
            const question_votes = {};
            action.votes.forEach(vote => {
                question_votes[vote.user_id] = vote.upvoted;
            });
            return question_votes;
        default:
            return state;

    }

}