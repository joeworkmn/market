def sign_in(user)
   visit signin_path
   fill_in "Username", with: user.username
   fill_in "Password", with: 'password'
   click_button "Sign in"
end

def sign_out
   click_link "Sign out"
end

def bid_from_form(amount)
   within("#bid-form-label + form") { find("#bid_amount").set(amount) }
   click_button "Place bid"
end

def bid_increment_button
   find("#increment-button")
end

def click_increment_button
   click_button "increment-button"
end

def increment_button_amount
   find(".increment-button-amount").value.to_d
end

def click_buyout_button
   click_button "Buy Out"
end
