# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  fname           :string(255)
#  lname           :string(255)
#  username        :string(255)
#  password_digest :string(255)
#  created_at      :datetime
#  updated_at      :datetime
#

class User < ActiveRecord::Base
   has_many :auctions, dependent: :destroy
   has_many :bids, dependent: :destroy
   has_many :created_conversations, class_name: "Conversation"
   has_many :user_conversations
   has_many :conversations_part_of, through: :user_conversations, 
            source: :conversation

   has_secure_password


   def name
      "#{fname} #{lname}"
   end
end
