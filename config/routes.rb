Rails.application.routes.draw do
  get "/find/:bodyPart", to: "exercises#find"
  get "/fav", to: "users#favorite_exercises"
  get "/exercises", to: "exercises#index"
  delete "/delete/:exercise_id", to: "users#fav_delete"



  get "/glutes", to:
  get "/calves", to: 
  get "/quads", to:
  get "/hamstrings", to:
  get "/abs", to: 
  get "/chest", to:
  get "/arms", to: 
  get "/back", to:
  


  resources :exercises, only: [:index, :show]
  resources :favorites, only: [:index, :show, :create, :destroy]
  resources :users, only: [:index, :show, :create, :destroy, :update]


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
