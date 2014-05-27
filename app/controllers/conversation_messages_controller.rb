class ConversationMessagesController < ApplicationController
   before_action :must_be_signed_in
   before_action :must_be_part_of_conversation

   def create
      @message = conversation.messages.build(message_params)
      @message.user_id = current_user.id
      if @message.save
         flash[:success] = "Message has been created."
         redirect_to conversation_path(params[:conversation_id])
      else
         @conversation = @message.conversation
         @messages = @conversation.messages.includes(:user)
         flash[:alert] = "Error occurred."
         render 'conversations/show'
      end
   end


   private

   def message_params
      params.require(:conversation_message).permit(:text)
   end

   def conversation
      @conversation ||= Conversation.find_by(id: params[:conversation_id])
   end
end
