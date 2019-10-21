export const upvoteQuestion = (question_vote) => (
    $.ajax({
        method: 'POST',
        url: 'api/question_votes',
        data: { question_vote }
    })
)

export const fetchAllVotes = (questionId) => (
    $.ajax({
        method: 'GET',
        url: 'api/question_votes',
        data: { questionId }
    })
)

export const downvoteToZeroQuestion = (question_vote) => (
    $.ajax({
        method: 'DELETE',
        url: `api/question_votes/${question_vote}`,
        data: { question_vote }
    })
)

// export const fetchAnswers = (questionId) => (
//     $.ajax({
//         method: 'GET',
//         url: 'api/answers',
//         data: { questionId }
//     })
// )

export const downvoteQuestion = (question_vote) => (
    $.ajax({
        method: 'POST',
        url: `api/tags/${id}`,
        data: { question_vote }
    })
)