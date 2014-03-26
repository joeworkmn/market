class SessionsController < ApplicationController
   def new
   end

   def create
      user = User.find_by(username: params[:session][:username])
      if user && user.authenticate(params[:session][:password])
         flash[:success] = "Welcome!"
      else
         flash[:alert] = "Incorrect username or password"
      end
      redirect_to new_session_path
   end

   def destroy
   end
end
