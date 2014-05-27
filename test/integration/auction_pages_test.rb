require 'test_helper'

class AuctionPagesTest < ActionDispatch::IntegrationTest

   describe "Index" do
      before { visit auctions_path }

      it { must_have_title("Auction Index") }
   end

   describe "Show" do
      let(:auction) { create(:auction) }
      let(:user) { create(:user) }

      describe "Before signed in" do
         before { visit auction_path auction }

         it { wont_have_button "Buy Out" }
         it { wont_have_button "Place starting bid" }
         it { wont_have_text "Enter your bid:" }
      end


      describe "After signed in" do
         before do
            sign_in(user)
            visit auction_path auction
         end

         it { must_have_button "Buy Out" }
         it { must_have_button "Place starting bid" }
         it { must_have_text "Enter your bid:" }

         describe "After placing starting bid" do
            describe "When using increment button" do
               before { click_button "Place starting bid" }

               it { must_have_button "Place a bid of: $#{auction.start_bid + auction.bid_increment}" }
            end
         end
      end

   end
end
