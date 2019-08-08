json.array! @tags do |tag|
    json.partial! 'api/tags/tag', tag: tag   
    # json.extract! tag.questions, :ids, as: :question_ids

    json.question_ids tag.questions.ids
    # json.question_ids do
        # json.array! tag.questions, :ids
    # end
end
