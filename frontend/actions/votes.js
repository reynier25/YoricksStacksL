import * as APIUtil from '../utils/votes';

export const RECEIVE_VOTE = 'RECEIVE_VOTE';
export const RECEIVE_VOTES = 'RECEIVE_VOTES';
export const REMOVE_VOTE = 'REMOVE_VOTE';

const receiveVote = vote => ({
    type: RECEIVE_VOTE,
    vote
});

const receiveVotes = votes => ({
    type: RECEIVE_VOTES,
    votes
});

const removeVote = vote => ({
    type: REMOVE_VOTE,
    vote
})



export const downvoteToZeroQuestion = (vote) => dispatch => (
    APIUtil.downvoteToZeroQuestion(vote)
        .then(vote => dispatch(removeVote(vote)))
);

export const upvoteQuestion = (vote) => dispatch => (
    APIUtil.upvoteQuestion(vote)
        .then(vote => dispatch(receiveVote(vote)))
);

export const fetchAllVotes = (id) => dispatch => (
    APIUtil.fetchAllVotes(id)
        .then(votes => dispatch(receiveVotes(votes)))
);