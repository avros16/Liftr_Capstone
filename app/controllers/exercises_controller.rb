class ExercisesController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found
skip_before_action :authorized


    def index 
        exercises = Exercise.all
        render json: exercises, status: :ok
    end

    def show 
        exercise = Exercise.find(params[:id])
        render json: exercise, serializer: ExerciseSerializer
    end



 def find
    exercise = Exercise.where(bodyPart: params[:bodyPart])
    render json: exercise
 end


#  def example
#     exercise = Exercise.find(params[:glutes])
#     render json: exercise, serializer: ExerciseSerializer
# end

 private

 def render_record_not_found
    render json: { error: 'Exercise Not Found' }, status: :not_found
 end

end
