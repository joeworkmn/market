require 'test_helper'

class AuctionTest < ActiveSupport::TestCase
  should have_many(:bids)

  # Example test. This test works
  #test "should foo" do
  #   @auction = Auction.create(title: "foo", bid_increment: 2, end_date: "2014-04-04")
  #   @auction.must_respond_to :title
  #end
end
