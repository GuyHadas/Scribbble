class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login_user!(@user)
      render :show
    else
      @errors = ["Invalid Username or Password"]
      render :show, status: 401
    end
  end

  def show
    @user = current_user
    if @user
      render :show
    else
      @errors = nil
      render :show, status: 404
    end
  end

  def destroy
    logout_user!
    render json: {}
  end

end
