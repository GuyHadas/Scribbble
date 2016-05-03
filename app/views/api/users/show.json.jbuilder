#shows current_user after Sign Up

json.user do
  json.extract! @user, :username, :id
end

if @errors
  json.errors do
    json.array! @errors
  end
end
