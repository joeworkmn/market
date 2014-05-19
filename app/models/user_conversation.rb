# == Schema Information
#
# Table name: user_conversations
#
#  id              :integer          not null, primary key
#  user_id         :integer
#  conversation_id :integer
#  created_at      :datetime
#  updated_at      :datetime
#

class UserConversation < ActiveRecord::Base
   belongs_to :user
   belongs_to :conversation
end
