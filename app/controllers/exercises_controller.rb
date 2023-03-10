class ExercisesController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found
# skip_before_action :authorized


    def index 
        exercises = Exercise.all
        render json: exercises, status: :ok
    end

    def show 
        exercise = Exercise.find(params[:id])
        render json: exercise, serializer: ExerciseSerializer
    end



    # def pectorals
    #     exercise = Exercise.where(target: 'pectorals')
    #     render json: exercise
    # end
    def glutes
        exercise = Exercise.where(target: 'glutes')
        render json: exercise
    end
    def chest
        body = Exercise.where(bodyPart:'Chest')
        render json: body
    end
    def back
        body = Exercise.where(bodyPart:'Back')
        render json: body
    end
    def arm
        body = Exercise.where(bodyPart:'Arms')
        render json: body
    end
    def abs
        body = Exercise.where(bodyPart:'Abs')
        render json: body
    end





 private

 def render_record_not_found
    render json: { error: 'Exercise Not Found' }, status: :not_found
 end

end
