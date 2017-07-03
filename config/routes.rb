Rails.application.routes.draw do
  mount Blazer::Engine, at: "blazer"

  devise_for :users
  resources :products
  root to: "products#index"
end
