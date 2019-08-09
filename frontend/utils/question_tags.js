export const postQuestionTag = (questionTag) => (
    $.ajax({
        method: 'POST',
        url: 'api/api/question_tags',
        data: { questionTag }
    })
);