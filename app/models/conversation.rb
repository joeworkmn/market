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
   has_many   :participations, class_name: "UserConversation", foreign_key: "conversation_id"
   has_many   :participants, through: :participations, source: :user

   validates :title, presence: true
   validates :user_id, presence: true

   after_save :add_creator_as_participant

   scope :created_by, ->(user) { where(user_id: user.id) }



   def latest_message
      messages.last.text if messages.any?
   end


   private

   def add_creator_as_participant
      participations.create(user_id: creator.id)
   end
   
end
