class BidsController < ApplicationController

   def create
      bid_handler = BidHandler.new
      @auction = bid_handler.run(current_user, auction, params)
      @bid = bid_handler.bid

      if @auction.save
         flash[:success] = "Your bid has been placed."
         flash[:success] = "You have won the auction." unless @auction.active?
         redirect_to @auction
      else
         flash.now[:alert] = "Error has occured."
         render 'auctions/show'
      end
   end


   private

   def auction
      @auction ||= Auction.find_by(id: params[:auction_id])
   end

   def bid_params
      params.require(:bid).permit(:amount)
   end
end
