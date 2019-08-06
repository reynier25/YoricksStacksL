class CreateQuestionsTags < ActiveRecord::Migration[5.2]
  def change
    create_join_table :questions, :tags do |t|
      t.index :question_id
      t.index :tag_id
    end
  end
end
