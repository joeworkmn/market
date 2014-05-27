class BidsController < ApplicationController
   before_action :must_be_signed_in

   def create
      @bid = auction.bids.build(amount: params[:bid][:amount], user_id: current_user.id)

      if @bid.save
         flash[:success] = "Your bid has been placed."
         flash[:success] = "You have won the auction." unless auction.reload.active?
         redirect_to auction
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
