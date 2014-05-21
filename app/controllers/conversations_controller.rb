class ConversationsController < ApplicationController
   def index
      @created_conversations = current_user.created_conversations 
      @conversations_part_of = current_user.conversations_part_of 
      @conversations = (@created_conversations + @conversations_part_of).sort_by(&:updated_at)
   end
end
