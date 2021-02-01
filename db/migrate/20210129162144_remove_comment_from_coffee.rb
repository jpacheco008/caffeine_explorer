class RemoveCommentFromCoffee < ActiveRecord::Migration[6.1]
  def change
    remove_column :coffees, :comment_id
  end
end
