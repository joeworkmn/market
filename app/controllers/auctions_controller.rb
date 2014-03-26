#  id            :integer          not null, primary key
#  title         :string(255)      not null
#  bid_increment :decimal(, )      default(0.0)
#  end_date      :datetime         not null
#  active        :boolean          default(TRUE)
#  user_id       :integer
#  created_at    :datetime
#  updated_at    :datetime
#  start_bid     :decimal(, )
#  buy_out       :decimal(, )
#
class AuctionsController < ApplicationController

   def new
      @auction = Auction.new
   end

   def create
      @auction = current_user.auctions.create(auction_params)
      if @auction.valid?
         flash[:success] = "Auction has been created."
         redirect_to new_auction_path
      else
         flash[:alert] = "Error has occurred."
         render 'new'
      end
   end




   private

   def auction_params 
      params.require(:auction)
            .permit(:title, :start_bid, :buy_out, :bid_increment, :end_date, :active)
   end

end
