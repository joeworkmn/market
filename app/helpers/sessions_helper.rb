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

   def signed_in?
      !current_user.nil?
   end

   def sign_out
      self.current_user = nil
      cookies.delete(:id)
   end

   def store_url
      session[:return_to] = request.url if request.get?
   end

   def redirect_back_or(default)
      redirect_to(session[:return_to] || default)
      session.delete(:return_to)
   end

   def must_be_signed_in
      unless signed_in?
         store_url
         redirect_to(signin_path, alert: "Must be signed in to do that.")
      end
   end
end
