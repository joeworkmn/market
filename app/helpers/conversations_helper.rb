module ConversationsHelper
   def must_be_part_of_conversation
      if current_user.conversations.find_by(id: params[:conversation_id]).nil?
         redirect_to signin_path, alert: "You may not do that."
      end
   end
end
