# == Schema Information
#
# Table name: bids
#
#  id         :integer          not null, primary key
#  amount     :decimal(, )      default(0.0), not null
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

   before_save :block_if_past_end_date
   before_save :block_unless_auction_active
   before_save :handle_buyouts



   private

   def must_be_at_least_start_bid_amount
      if amount < auction.start_bid
         errors.add(:amount, "Must be at least the starting bid amount")
      end
   end

   def must_meet_the_bid_increment
      min_amount = auction.high_bid + auction.bid_increment
      if amount < min_amount
         errors.add(:amount, "Must meet the bid increment or more")
      end
   end

   def block_unless_auction_active
      return false unless self.auction.active?
   end

   def block_if_past_end_date
      return false if Time.now >= auction.end_date
   end

   def handle_buyouts
      if amount >= auction.buy_out
         self.amount = auction.buy_out
         auction.close
         auction.save
      end
   end

end
