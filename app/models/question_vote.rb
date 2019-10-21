class QuestionVote < ApplicationRecord

    validates :user_id, :question_id, presence: true
    validates :user_id, uniqueness: { scope: :question_id }

    belongs_to :user

    belongs_to :question

end


# uniqueness validation scoped to question's id