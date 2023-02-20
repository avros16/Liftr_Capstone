Rails.application.routes.draw do
  # get "/:bodyPart", to: "exercises#bodyPart"
  get "/fav", to: "users#favorite_exercises"
  delete "/delete/:exercise_id", to: "users#fav_delete"
  post "/auth/login", to: "auth#login"


  # get '/pectorals', to: 'exercises#pectorals'
  get '/glutes', to: 'exercises#glutes'
  get '/chest', to: 'exercises#chest'
  get '/arms', to: 'exercises#arm'
  get '/abs', to: 'exercises#abs'
  get '/back', to: 'exercises#back'


  resources :exercises, only: [:index, :show]
  resources :favorites, only: [:index, :show, :create, :destroy]
  resources :users, only: [:index, :show, :create, :destroy, :update]


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
