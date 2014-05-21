require 'test_helper'

class ConversationTest < ActiveSupport::TestCase
   describe "Conversation" do
      should belong_to(:creator)
      should have_many(:messages)
      should have_many(:user_conversations)
      should have_many(:participants).through(:user_conversations).source(:user)
   end
end
