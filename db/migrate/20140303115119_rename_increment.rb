class RenameIncrement < ActiveRecord::Migration
  def change
     rename_column :auctions, :increment, :bid_increment
  end
end
