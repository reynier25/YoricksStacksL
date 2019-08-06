json.partial! "api/tags/tag", tag: @tag
json.extract! @tag.questions, :question_ids