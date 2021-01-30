Rails.application.routes.draw do
  resources :coffees
  resources :comments
  resources :favorites_coffee
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users
  # put '/comments', to: 'comments#add_coffee_to_comments'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
