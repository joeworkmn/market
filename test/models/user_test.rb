require 'test_helper'

class UserTest < ActiveSupport::TestCase
   should have_many :auctions
   should have_many :bids
end
