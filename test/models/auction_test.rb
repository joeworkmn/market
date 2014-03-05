require 'test_helper'

class AuctionTest < ActiveSupport::TestCase
  should have_many(:bids)

  
  test "auction title" do
     auction = build(:auction)
     auction.title.must_equal("auction1")
  end
end
