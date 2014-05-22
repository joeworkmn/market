require 'test_helper'

class UserTest < ActiveSupport::TestCase
   describe "User" do
      should have_many :auctions
      should have_many :bids
      should have_many(:user_conversations)
      should have_many(:conversations).through(:user_conversations).source(:conversation)
      should have_many(:created_conversations)
   end
end
