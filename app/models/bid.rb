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
   validate  :must_be_atleast_start_bid_amount
   validate  :must_be_atleast_the_sum_of_high_bid_and_bid_increment
   # TODO Might need to add a "buyout state" to this model so it knows when someone is using the buyout option.
   # TODO Add validation to check if bid is >= buyout price. If it is, add error message that tells the user to click the "buyout button" instead.


   private

   def must_be_atleast_start_bid_amount
      if amount < auction.start_bid
         errors.add(:amount, "must be at least the starting bid amount")
      end
   end

   def must_be_atleast_the_sum_of_high_bid_and_bid_increment
      min_amount = auction.high_bid + auction.bid_increment
      if amount < min_amount
         errors.add(:amount, "must meet the bid increment or more")
      end
   end

end
