json.array! @designs do |design|
  json.extract!(design, :title, :description, :design_url, :id)
  json.username design.user.username
end
