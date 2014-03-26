class SessionsController < ApplicationController
   def new
   end

   def create
      user = User.find_by(username: params[:session][:username])
      if user && user.authenticate(params[:session][:password])
         sign_in(user)
         flash[:success] = "Welcome!"
      else
         flash[:alert] = "Incorrect username or password"
      end
      render 'new'
   end

   def destroy
   end
end
