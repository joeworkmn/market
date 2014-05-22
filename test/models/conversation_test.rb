require 'test_helper'

class ConversationTest < ActiveSupport::TestCase
   describe "Conversation" do
      should belong_to(:creator)
      should have_many(:messages)
      should have_many(:participations)
      should have_many(:participants).through(:participations).source(:user)
   end


   test "add_creator_as_participant" do
      convo = create(:conversation)
      convo.participants.include?(convo.creator).must_equal(true)
   end
end
