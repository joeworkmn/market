module AuctionsHelper
   def must_be_auction_owner
      if current_user.auctions.find_by(id: params[:id]).nil?
         redirect_to signin_path, alert: "You may not do that."
      end
   end
end
