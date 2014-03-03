class AddBelongsToForBids < ActiveRecord::Migration
  def change
     change_table :bids do |t|
        t.belongs_to :auction

     end
  end
end
