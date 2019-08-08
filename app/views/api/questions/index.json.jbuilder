json.array! @questions do |question|
    json.partial! 'api/questions/question', question: question
    json.extract! question.user, :username
    # json.extract! question.answers, :ids
    json.ids question.answer_ids
    json.tag_ids question.tags.ids

end