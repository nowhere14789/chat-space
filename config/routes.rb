Rails.application.routes.draw do
  devise_for :users
  root 'groups#index'
  get 'messages/index'  #カリキュラムにない行
  resources :users,only:[:edit,:update]
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :messages, only: [:index]
  end
end
