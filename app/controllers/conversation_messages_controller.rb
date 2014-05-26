class ConversationMessagesController < ApplicationController
   def create
      @message = current_user.conversation_messages.build(message_params)
      @message.conversation_id = params[:conversation_id]
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
end
