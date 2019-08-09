export const upvoteQuestion = () => (
    $.ajax({
        method: 'POST',
        url: 'api/question_votes'
    })
)

export const fetchAllVotes = () => (
    $.ajax({
        method: 'GET',
        url: 'api/question_votes'
    })
)



// export const downvoteQuestion = (id) => (
//     $.ajax({
//         method: 'GET',
//         url: `api/tags/${id}`
//     })
// )