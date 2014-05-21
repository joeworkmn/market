require 'test_helper'

class AuctionPagesTest < ActionDispatch::IntegrationTest

   describe "Index" do

      before { visit auctions_path }

      it "Must have correct title" do
         page.must_have_title("Auction Index")
      end
   end
end
