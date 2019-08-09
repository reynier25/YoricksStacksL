class Tag < ApplicationRecord
    validates :name, presence: true

    has_and_belongs_to_many :questions, optional: true

    # attr_accessor :question_ids

end
