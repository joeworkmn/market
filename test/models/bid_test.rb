require 'test_helper'

class BidTest < ActiveSupport::TestCase

   describe "Bid" do
      should belong_to :auction
      should belong_to :user
   end


   test "must_be_at_least_start_bid_amount" do
      bid = build(:bid)
      bid.amount = bid.auction.start_bid - 1
      bid.wont_be(:valid?)
   end

   test "must_meet_the_bid_increment" do
      auction = create(:auction_with_bid)
      auction.reload
      bid = build(:bid, amount: auction.bids.first.amount + auction.bid_increment - 1, auction: auction)
      bid.wont_be(:valid?)
   end

   test "block_if_past_end_date" do
      auction = create(:auction, end_date: 1.days.ago)
      bid = build(:bid, auction: auction)
      bid.save.must_equal(false)
   end

   test "block_unless_auction_active" do
      bid = build(:bid)
      bid.auction.close
      bid.save.must_equal(false)
   end


   describe "handle_buyouts" do

      test "must close the auction" do
         bid = create(:buyout_bid)
         bid.reload
         bid.auction.active?.must_equal false
      end

      test "amount must be set to buyout if over" do
         bid = create(:over_buyout_bid)
         bid.reload
         bid.amount.must_equal bid.auction.buy_out
      end

   end

end
