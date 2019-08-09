class CreateVotesForQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :question_votes do |t|
      t.integer :question_id, null: false
      t.integer :user_id, null: false
      t.boolean :upvoted, null: false
      t.timestamps
    end
  end
end
