require 'test_helper'

class BidTest < ActiveSupport::TestCase

   describe "Buyouts" do

      test "should close the auction" do
         bid = create(:buyout_bid)
         bid.reload
         bid.auction.active?.must_equal false
      end

      test "amount should be set to buyout if over" do
         bid = create(:over_buyout_bid)
         bid.reload
         bid.amount.must_equal bid.auction.buy_out
      end

   end


   describe "Increments" do

      test "should be invalid if increment isn't reached" do
         auction = create(:auction_with_bid)
         auction.reload
         bid = build(:bid, amount: auction.bids.first.amount + auction.bid_increment - 1, auction: auction)
         bid.wont_be(:valid?)
      end

   end
end
