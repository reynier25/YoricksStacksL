json.partial! 'api/question_votes/question_vote', question_vote: @question_vote
# json.extract! @tag.questions, :ids

# json.question_ids @tag.questions.ids


# use json.array!, iterate through ids, set question_ids key
# to array of ids?