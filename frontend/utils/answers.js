export const postAnswer = (answer) => (
    $.ajax({
        method: 'POST',
        url: 'api/answers',
        data: { answer }
    })
);

export const fetchAnswer = (id) => (
    $.ajax({
        method: 'GET',
        url: `api/answers/${id}`
    })
);

export const fetchAnswers = (questionId) => (
    $.ajax({
        method: 'GET',
        url: 'api/answers',
        data: {questionId}
    })
)