json.partial! "api/questions/question", question: @question
json.extract! @question.user, :username
json.extract! @question.answers, :ids
json.extract! @question.tags, :tag_ids