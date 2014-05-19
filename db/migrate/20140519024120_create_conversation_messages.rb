class CreateConversationMessages < ActiveRecord::Migration
  def change
    create_table :conversation_messages do |t|
      t.belongs_to :conversation
      t.string :text

      t.timestamps
    end
  end
end
