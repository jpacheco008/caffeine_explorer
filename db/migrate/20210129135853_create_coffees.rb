class CreateCoffees < ActiveRecord::Migration[6.1]
  def change
    create_table :coffees do |t|
      t.string :blend_name
      t.string :origin
      t.string :variety
      t.string :notes
      t.string :intensifier
      t.integer :caffeine_level
      t.references :comment, null: false, foreign_key: true

      t.timestamps
    end
  end
end
