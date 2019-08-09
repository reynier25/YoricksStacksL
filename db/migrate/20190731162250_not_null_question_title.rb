class NotNullQuestionTitle < ActiveRecord::Migration[5.2]
  def change
    change_column_null :questions, :title, false
  end
end
