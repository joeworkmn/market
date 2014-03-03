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
#

class Auction < ActiveRecord::Base
   has_many :bids
   belongs_to :owner, class_name: User
end
