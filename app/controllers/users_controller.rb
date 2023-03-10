class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found
  # skip_before_action :authorized, only: [:create, :index, :show, :update]

    def index
        user = User.all
        render json: user, status: :ok
    end



    def show
        user = find_user
        render json: user, serializer: UserSerializer
    end

    def create
       user = User.create!(create_user_params)
       token = encode_token({user_id: user.id})
       render json: {user: UserSerializer.new(user), jwt: token}, status: :created
    end

    def me
      render json: current_user, status: :ok
    end



    def favorite_exercises
      render json: current_user.exercises.uniq, status: :ok
    end



    # this will delete from the favorite table associated with this user instead of deleting from the the exercises table
    def fav_delete
      fav = find_ex
      fav.destroy
      head :no_content
    end


    def update
      user = find_user
      user.update!(update_user_params)
     render json: user
    end


    def destroy
     user = find_user
     user.destroy
     head :no_content
    end


    private


    def find_ex
      ex = current_user.favorites.find_by(exercise_id: params[:exercise_id])
  end


    def find_user
        user = User.find(params[:id])
    end


    def create_user_params
      params.permit(:username, :password, :email)
    end


    def update_user_params
      params.permit(:first_name, :last_name, :email, :weight, :goal, :personalBestBench, :personalBestSquat, :personalBestMile, :personalBestDeadlift, :bodyFatPercentage)


    def render_record_not_found
      render json: { error: "User not found" }, status: :not_found
    end





  end






end
