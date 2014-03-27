class BidsController < ApplicationController

   # TODO Handle buyouts.
   def create
      @auction = Auction.find_by(id: params[:auction_id])
      @bid = current_user.bids.build(bid_params)
      @bid.amount += @auction.high_bid if params[:is_increment]
      @bid.auction_id = params[:auction_id]
      if @bid.save
         flash[:success] = "Your bid has been placed."
         redirect_to @auction
      else
         flash.now[:alert] = "Error has occured."
         render 'auctions/show'
      end
   end



   private

   def bid_params
      params.require(:bid).permit(:amount, :auction_id, :is_increment)
   end
end
