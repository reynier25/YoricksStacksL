json.array! @questions do |question|
    json.partial! 'api/questions/question', question: question
    json.extract! question.user, :username
end