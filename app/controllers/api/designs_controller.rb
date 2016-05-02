
class Api::DesignsController < ApplicationController
  def show
    @design = Design.includes(comments: :user).find(params[:id])
    render :show
  end

  def index
    @designs = Design.includes(:user, comments: :user)
    render :index
  end

  def create
    @design = Design.new(design_params)
    @design.user_id = current_user.id
    if @design.save
      render :show
    else
      @errors = @design.errors.full_messages
      render :show, status: 401
    end
  end

  def update
    @design = Design.find(params[:id])
    if @design.update(design_params)
      render :show
    else
      @errors = @design.errors.full_messages
      render :show, status: 401
    end
  end

  def destroy
    @design = Design.find(params[:id])
    @design.destroy
    render :show
  end

  private
  def design_params
    params.require(:design).permit(:title, :description, :design_url)
  end

end
