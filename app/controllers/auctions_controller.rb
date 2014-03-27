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

   before_action :must_be_signed_in, except: [:index, :show]
   before_action :must_be_auction_owner, only: [:edit, :update, :destroy]


   def index
      @auctions = Auction.paginate(page: params[:page])
   end

   def show
      auction
      @bid = Bid.new
   end

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

   def edit
      auction
   end

   def update
      if auction.update(auction_params)
         flash[:success] = "Auction has been updated."
         redirect_to edit_auction_path
      else
         flash[:alert] = "Error has occurred."
         render 'edit'
      end
   end

   def buyout
      @bid = current_user.bids.build
      @bid.amount = auction.buy_out ; @bid.auction_id = params[:id]
      if @bid.save
         flash[:success] = "You have won the auction!"
         redirect_to auction
      else
         flash[:alert] = "Error has occured."
         render :show
      end
   end



   private

   def auction_params 
      params.require(:auction)
            .permit(:title, :start_bid, :buy_out, :bid_increment, :end_date, :active)
   end

   def auction
      @auction ||= Auction.find_by(id: params[:id])
   end

end
