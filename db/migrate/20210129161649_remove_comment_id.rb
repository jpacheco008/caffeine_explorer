class RemoveCommentId < ActiveRecord::Migration[6.1]
  def change
    add_column :comments, :coffee_id, :integer
    add_foreign_key :comments, :coffees
  end
end
