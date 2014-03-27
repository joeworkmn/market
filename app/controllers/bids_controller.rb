class BidsController < ApplicationController


   def create
      @auction = Auction.find_by(id: params[:auction_id])
      @bid = current_user.bids.build(bid_params)
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
      params.require(:bid).permit(:amount, :auction_id)
   end
end
