json.array! @question_votes do |question_vote|
    json.partial! 'api/question_votes/question_vote', question_vote: question_vote
    # json.extract! question.user, :username
    # json.extract! question.answers, :ids
    # json.ids question.answer_ids
    # json.tag_ids question.tags.ids

end