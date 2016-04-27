#shows current_user

if @user
  json.user do
    json.extract! @user, :username
  end
end 

if @errors
  json.errors do
    json.array! @errors
  end
end
