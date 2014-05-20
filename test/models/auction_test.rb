require 'test_helper'

class AuctionTest < ActiveSupport::TestCase
   describe "Auction" do
      should have_many(:bids)
      should belong_to(:owner)
   end


  describe "has_bids?" do
     before { @auction = create(:auction) }

     test "must be false if no bids" do
        @auction.has_bids?.must_equal(false)
     end

     test "must be true with bids" do
        auction = create(:auction_with_bid)
        auction.reload
        auction.has_bids?.must_equal(true)
     end

     test "must be false if there's only non-saved bids" do
        @auction = create(:auction)
        @auction.bids.build
        @auction.has_bids?.must_equal(false)
     end
  end

  describe "high_bid" do
     test "must be 0 if no bids" do
        auction = create(:auction)
        auction.high_bid.must_equal(0)
     end
  end

  test "buyout_must_be_more_than_start_bid" do 
     auction = build(:auction)
     auction.buy_out = auction.start_bid - 1
     auction.wont_be(:valid?)
  end
  
end
