# == Schema Information
#
# Table name: bids
#
#  id         :integer          not null, primary key
#  amount     :decimal(, )      not null
#  user_id    :integer
#  created_at :datetime
#  updated_at :datetime
#  auction_id :integer
#

class Bid < ActiveRecord::Base
   belongs_to :auction
   belongs_to :user

end
