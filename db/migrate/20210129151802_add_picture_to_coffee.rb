class AddPictureToCoffee < ActiveRecord::Migration[6.1]
  def change
    add_column :coffees, :picture, :string
  end
end
