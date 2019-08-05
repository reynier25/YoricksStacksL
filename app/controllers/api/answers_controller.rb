class Api::AnswersController < ApplicationController

    def create
        @answer = Answer.new(answer_params)


        if @answer.save
            render json: 'api/answers/show'
        else
            render @answer.errors.full_messages, status: 402
        end
    end

    def index
        @answers = Answer.all
    end

    def show
        @answer = Answer.find(params[:id])
    end


    private

    def answer_params
        params.require(:answer).permit(:body, :author_id, :question_id)
    end

end
