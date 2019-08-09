class Api::AnswersController < ApplicationController

    def create
        @answer = Answer.new(answer_params)
        # @answer.question_id = params[:questionId]

        if @answer.save
            render 'api/answers/show'
        else
            render @answer.errors.full_messages, status: 402
        end
    end

    def index
        question = params[:questionId]
        @answers = Answer.where(question_id: question)

        render 'api/answers/index'
    end

    def show
        @answer = Answer.find(params[:id])
        render 'api/answers/show'
    end

    def edit
        @answer = Answer.find(params[:id])
    end

    def update
        @answer = Answer.find(params[:id])

        if @answer.update(answer_params)
            render 'api/answers/show'
        else
            render json: @answers.errors.full_messages, status: 422
        end
    end


    private

    def answer_params
        params.require(:answer).permit(:body, :author_id, :question_id)
    end

end
