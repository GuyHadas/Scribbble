class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
      @design = Design.includes(comments: :user).find(comment_params[:design_id])
      render 'api/designs/show'
    else
      @errors = @comment.errors.full_messages
      render 'api/designs/show', status: 401
    end
  end


  def destroy
    @comment = Comment.find(params[:id])
    if @comment
      @comment.destroy
    end
    @design = Design.includes(comments: :user).find(@comment.design_id)
    render 'api/designs/show'
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :x_pos, :y_pos, :design_id)
  end
end
