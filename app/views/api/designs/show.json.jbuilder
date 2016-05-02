if @design
  json.extract!(@design, :title, :description, :design_url, :id)
  json.username @design.user.username
  json.comments @design.comments, partial: 'api/comments/comment', as: :comment
end


if @errors
  json.errors do
    json.array! @errors
  end
end
