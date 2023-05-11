Rails.application.routes.draw do
  get 'requirements/new'
  get 'materials/index'
  devise_for :users
  root to: "pages#home"
  resources :reviews, only: [:index, :show, :new, :create, :edit, :update, :destroy]

  resources :materials, only: [:index, :show, :new, :create, :edit, :update, :destroy]

  resources :gallery_items, only: [:index, :show, :new, :create, :edit, :update, :destroy]

  resources :requirements, only: [:index, :show, :new, :create, :edit, :update, :destroy]

  resources :brands, only: [:index, :show, :new, :create, :edit, :update]

  resources :staff_members, only: [:index, :show, :new, :create, :edit, :update, :destroy]

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/contact/' => 'pages#contact'
  get '/cms/' => 'pages#cms'
end
