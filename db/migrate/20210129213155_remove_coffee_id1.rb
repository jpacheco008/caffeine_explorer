class RemoveCoffeeId1 < ActiveRecord::Migration[6.1]
  def change
    remove_column :comments, :coffee_id
  end
end
