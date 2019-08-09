class QuestionVote < ApplicationRecord

    validates :user_id, :question_id, :upvoted, presence: true
    validates :user_id, uniqueness: { scope: :question_id }

    belongs_to :user

    belongs_to :question

end
