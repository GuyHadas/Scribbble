Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :show]
    resource :user, only: [:create]
    resources :designs, only: [:create, :destroy, :show, :index, :update]
  end
end
