class BidHandler

   attr_accessor :auction, :bid

   def initialize
   end

   def run(user, auction, params)
      self.auction = auction
      self.bid = auction.bids.build(amount: params[:bid][:amount], user_id: user.id)

      if buyout_reached?
         self.bid.amount = self.auction.buy_out
         self.auction.active = false
      end

      return auction
   end


   private

   def buyout_reached?
      self.bid.amount >= self.auction.buy_out
   end
end
