class Api::UsersController < ApplicationController

    def create
      @user = User.new(user_params)
      if @user.save
        login_user!(@user)
        render :show
      else
        @errors = @user.errors.full_messages
        render :show, status: 401
      end
    end

    private
    def user_params
      params.require(:user).permit(:username, :password)
    end

  end
