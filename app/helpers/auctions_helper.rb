module AuctionsHelper
   def must_be_auction_owner
      if current_user.auctions.find_by(id: params[:id]).nil?
         redirect_to signin_path, alert: "You may not do that."
      end
   end

   def bid_increment_button_amount(auction)
      if @auction.high_bid >= @auction.start_bid
         amount_value = @auction.bid_increment + @auction.high_bid
      else
         amount_value = @auction.start_bid
      end
   end

   def bid_increment_button_text(auction)
      if @auction.high_bid >= @auction.start_bid
         "Place a bid of: #{number_to_currency(@auction.bid_increment + @auction.high_bid)}"
      else
         "Place starting bid"
      end
   end
end
