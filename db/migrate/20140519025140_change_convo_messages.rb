class ChangeConvoMessages < ActiveRecord::Migration
  def change
     add_reference :conversation_messages, :user, index: true
  end
end
