class Tag < ApplicationRecord
    validates :name, presence: true

    has_and_belongs_to_many :questions

    # attr_accessor :question_ids

end
