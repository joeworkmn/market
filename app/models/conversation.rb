# == Schema Information
#
# Table name: conversations
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  title      :string(255)
#  created_at :datetime
#  updated_at :datetime
#

class Conversation < ActiveRecord::Base
   belongs_to :creator, class_name: "User", foreign_key: "user_id"
   has_many   :messages, class_name:  "ConversationMessage"
   has_many   :user_conversations
   has_many   :participants, through: :user_conversations, source: :user
end
