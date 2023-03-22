Rails.application.routes.draw do
  get 'requirements/new'
  get 'materials/index'
  devise_for :users
  root to: "pages#home"
  resources :reviews, only: [:index, :show, :new, :create, :destroy]

  resources :materials, only: [:index, :show, :new, :create, :destroy]

  resources :gallery_items, only: [:index, :show, :new, :create, :destroy]

  resources :requirements, only: [:index, :show, :new, :create, :destroy]

  # resources :materials, only: [:index, :show, :new, :create, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/contact/' => 'pages#contact'
end
