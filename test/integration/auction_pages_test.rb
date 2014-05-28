require 'test_helper'

class AuctionPagesTest < ActionDispatch::IntegrationTest

   describe "Index" do
      before { visit auctions_path }

      it { must_have_title("Auction Index") }
   end

   describe "Show" do
      let(:auction) { create(:auction) }
      let(:user)    { create(:user) }

      before do
         sign_in(user)
         visit auction_path auction
      end

      describe "When not signed in" do
         before do
            sign_out
            visit auction_path auction
         end

         it { wont_have_button "Buy Out" }
         it { wont_have_button "Place starting bid" }
         it { wont_have_text "Or enter your bid:" }
      end

      it { must_have_button "Buy Out" }
      it { must_have_button "Place starting bid" }
      it { must_have_text "Or enter your bid:" }

      describe "After placing starting bid" do
         before { click_button "Place starting bid" }

         it { must_have_button "Place a bid of: $#{auction.start_bid + auction.bid_increment}" }
      end

      describe "When placing a bid" do
         describe "From bid form" do
            before { bid_from_form(60) }

            it "Must show the high bid" do
               within(".auction-info") { page.must_have_text("High bid: $60.00") }
               within(".high-bid")     { page.must_have_text("High bid: $60.00") }
            end

            it { must_have_button "Place a bid of: $#{60 + auction.bid_increment}" }
         end

         describe "From increment button" do
            before do
               click_increment_button # To place starting bid.
               @bid = increment_button_amount
               click_increment_button
            end

            it "Must show the high bid" do
               within(".auction-info") { page.must_have_text("High bid: $#{@bid}") }
               within(".high-bid")     { page.must_have_text("High bid: $#{@bid}") }
            end

            it { must_have_button "Place a bid of: $#{@bid + auction.bid_increment}" }
         end
      end

      describe "When auction is bought out" do
         it "Must close the auction" do
            click_buyout_button
            page.must_have_text "You have won the auction"
            page.must_have_selector(".label.alert", text: "Closed")
         end
      end
   end
end
