# == Schema Information
#
# Table name: conversation_messages
#
#  id              :integer          not null, primary key
#  conversation_id :integer
#  text            :string(255)
#  created_at      :datetime
#  updated_at      :datetime
#  user_id         :integer
#

class ConversationMessage < ActiveRecord::Base
   belongs_to :conversation
   belongs_to :user
end
