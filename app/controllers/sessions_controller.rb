class SessionsController < ApplicationController
   def new
   end

   def create
      user = User.find_by(username: params[:session][:username])
      if user && user.authenticate(params[:session][:password])
         sign_in(user)
         flash[:success] = "Welcome!"
         redirect_back_or(signin_path)
      else
         flash[:alert] = "Incorrect username or password"
         render 'new'
      end
   end

   def destroy
      sign_out
      redirect_to signin_path
   end
end
