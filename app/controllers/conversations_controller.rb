class ConversationsController < ApplicationController
   def index
      @conversations = current_user.conversations.includes(:messages)
   end

   def show
      @messages = conversation.messages.includes(:user)
      @message = ConversationMessage.new
   end

   def create
   end


   private

   def conversation
      @conversation ||= Conversation.find_by(id: params[:id])
   end
end
