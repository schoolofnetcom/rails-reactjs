Rails.application.routes.draw do
  root to: 'app#index'

  namespace :api do
    resources :people, only: [:index, :create, :destroy, :update]
  end
end
