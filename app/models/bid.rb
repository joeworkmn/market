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

   validates :amount, presence: true, numericality: true
   validates :user_id, presence: true
   validates :auction_id, presence: true
   validate  :must_be_at_least_start_bid_amount
   validate  :must_meet_the_bid_increment

   before_save :block_unless_auction_active


   private

   def must_be_at_least_start_bid_amount
      if amount < auction.start_bid
         errors.add(:amount, "must be at least the starting bid amount")
      end
   end

   def must_meet_the_bid_increment
      min_amount = auction.high_bid + auction.bid_increment
      if amount < min_amount
         errors.add(:amount, "must meet the bid increment or more")
      end
   end

   def block_unless_auction_active
      return false unless self.auction.active?
   end

end
