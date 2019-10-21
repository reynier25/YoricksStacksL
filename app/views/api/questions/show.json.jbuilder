json.partial! "api/questions/question", question: @question
json.extract! @question.user, :username
# json.extract! @question.answers, :ids
json.tag_ids @question.tags.ids
json.answer_ids @question.answers.ids
json.question_vote_ids @question.question_votes.ids