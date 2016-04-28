class CreateDesigns < ActiveRecord::Migration
  def change
    create_table :designs do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :design_url, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end
    add_index :designs, :user_id
  end
end
