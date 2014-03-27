class MakeAmountDefaultZero < ActiveRecord::Migration
  def change
     change_column :bids, :amount, :decimal, default: 0
  end
end
