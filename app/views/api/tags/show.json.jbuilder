json.partial! 'api/tags/tag', tag: @tag
# json.extract! @tag.questions, :ids

json.question_ids @tag.questions.ids


# use json.array!, iterate through ids, set question_ids key
# to array of ids?