require 'test_helper'

class UserTest < ActiveSupport::TestCase
   describe "User" do
      should have_many :auctions
      should have_many :bids
      should have_many :created_conversations
      should have_many(:conversations_part_of).through(:user_conversations).source(:conversation)
   end
end
