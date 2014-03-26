module SessionsHelper
   def sign_in(user)
      cookies.permanent[:id] = user.id
      self.current_user = user
   end

   def current_user
      @current_user ||= User.find_by(id: cookies[:id])
   end

   def current_user=(user)
      @current_user = user
   end
end
