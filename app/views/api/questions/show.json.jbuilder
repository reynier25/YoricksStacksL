json.partial! "api/questions/question", question: @question
json.extract! @question.user, :username
# json.extract! @question.answers, :ids
json.tag_ids @question.tags.ids
json.ids @question.answer_ids
