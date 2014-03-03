# == Schema Information
#
# Table name: users
#
#  id                 :integer          not null, primary key
#  fname              :string(255)
#  lname              :string(255)
#  username           :string(255)
#  encrypted_password :string(255)
#  created_at         :datetime
#  updated_at         :datetime
#

class User < ActiveRecord::Base
end
