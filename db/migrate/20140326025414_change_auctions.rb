class ChangeAuctions < ActiveRecord::Migration
  def change
     add_column :auctions, :start_bid, :decimal
     add_column :auctions, :buy_out, :decimal
  end
end
