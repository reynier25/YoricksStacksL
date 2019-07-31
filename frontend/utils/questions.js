export const postQuestion = (question) => (
    $.ajax({
        method: 'POST',
        url: 'api/questions',
        data: { question }
    })
);

export const fetchQuestions = (questions) => (
    $.ajax({
        method: 'GET',
        url: 'api/questions',
        data: { questions }
    })
);

export const fetchQuestion = (id) => (
    $.ajax({
        method: 'GET',
        url: `api/questions/${id}`
    })
);

export const deleteQuestion = (id) => (
    $.ajax({
        method: 'DELETE',
        url: `api/questions/${id}`
    })
);

export const updateQuestion = (question) => (
    $.ajax({
        method: 'GET',
        url: 'api/questions',
        data: { questions }
    })
);


//edit