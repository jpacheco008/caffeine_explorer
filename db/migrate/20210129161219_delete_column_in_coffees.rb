class DeleteColumnInCoffees < ActiveRecord::Migration[6.1]
  def change
    remove_foreign_key :coffees, :comments
  end
end
