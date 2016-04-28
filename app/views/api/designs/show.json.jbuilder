if @design
  json.extract!(@design, :title, :description, :design_url, :id)
  json.username @design.user.username
end


if @errors
  json.errors do
    json.array! @errors
  end
end
