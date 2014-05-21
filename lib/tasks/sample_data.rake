namespace :db do
   desc "Fill database with sample data"

   task make_users: :environment do
      make_users
   end

   task make_auctions: :environment do
      make_auctions
   end

   task make_conversations: :environment do
      make_conversations
   end
end

def make_users 
   User.destroy_all
   User.create(fname: "John", lname: "Doe", username: "jdoe", password: "pass", password_confirmation: "pass")
   User.create(fname: "Tim", lname: "Duncan", username: "timmy", password: "pass", password_confirmation: "pass")
   User.create(fname: "Kevin", lname: "Durant", username: "durant", password: "pass", password_confirmation: "pass")
   User.create(fname: "Stephan", lname: "Curry", username: "curry", password: "pass", password_confirmation: "pass")
end

def make_auctions
   Auction.destroy_all
   user = User.find_by(username: "jdoe")
   10.times do |n|
      user.auctions.create(title: "auction #{n}", start_bid: 50, buy_out: 100, bid_increment: 10, end_date: 5.days.from_now)
   end
end

def make_conversations
   Conversation.destroy_all
   user = User.find_by(username: 'jdoe')
   5.times do |n|
      user.created_conversations.create(title: "convo #{n}")
   end
end
