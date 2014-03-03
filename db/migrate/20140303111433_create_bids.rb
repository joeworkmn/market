class CreateBids < ActiveRecord::Migration
  def change
    create_table :bids do |t|
      t.decimal :amount, null: false
      t.belongs_to :user

      t.timestamps
    end
  end
end
