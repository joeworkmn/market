# == Schema Information
#
# Table name: auctions
#
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

class Auction < ActiveRecord::Base
   has_many :bids, dependent: :destroy
   belongs_to :owner, class_name: User

   validates :title, presence: true
   validates :end_date, presence: true
   validates :bid_increment, numericality: true, allow_blank: true
   validates :start_bid, numericality: true, allow_blank: true
   validates :buy_out, numericality: true, allow_blank: true

   validate :buy_out_must_be_more_than_start_bid

   default_scope -> { order("created_at DESC") }


   private

   # Custom validation method
   def buy_out_must_be_more_than_start_bid
      if buy_out <= start_bid
         errors.add(:buy_out, "must be greater than the starting bid")
      end
   end
end
