import { RECEIVE_VOTE, RECEIVE_VOTES, REMOVE_VOTE } from '../actions/votes';

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
        case REMOVE_VOTE:
            return {}
        default:
            return state;

    }

}