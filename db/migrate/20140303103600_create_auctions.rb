class CreateAuctions < ActiveRecord::Migration
  def change
    create_table :auctions do |t|
      t.string "title", null: false 
      t.decimal "increment", default: 0.0
      t.datetime "end_date", null: false
      t.boolean  "active", default: true
      t.belongs_to "user"

      t.timestamps
    end
  end
end
