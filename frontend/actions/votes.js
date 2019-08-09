import * as APIUtil from '../utils/votes';

export const RECEIVE_VOTE = 'RECEIVE_VOTE';
export const RECEIVE_VOTES = 'RECEIVE_VOTES';

const receiveVote = vote => ({
    type: RECEIVE_VOTE,
    vote
});

const receiveVotes = votes => ({
    type: RECEIVE_VOTES,
    votes
});


export const upvoteQuestion = () => dispatch => (
    APIUtil.upvoteQuestion()
        .then(vote => dispatch(receiveVote(vote)))
);

export const fetchAllVotes = () => dispatch => (
    APIUtil.fetchAllVotes()
        .then(votes => dispatch(receiveVotes(votes)))
);