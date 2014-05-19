require 'test_helper'

class ConversationTest < ActiveSupport::TestCase
   should belong_to(:creator)
   should have_many(:messages)
   should have_many(:user_conversations)
   should have_many(:participants)
end
