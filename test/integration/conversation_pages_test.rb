require 'test_helper'

class ConversationPagesTest < ActionDispatch::IntegrationTest
   describe "Index" do
      before { visit conversations_path }

      it "should have correct title" do
         page.must_have_title("Conversations")
      end
   end
end
