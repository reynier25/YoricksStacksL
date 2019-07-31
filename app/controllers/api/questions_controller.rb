class Api::QuestionsController < ApplicationController

    def create
        @question = Question.new(question_params)

        if @question.save
            render 'api/questions/show'
        else
            render :json @question.errors.full_messages, status: 402
        end

    end

    def index
        @questions = Question.all
        render 'api/questions/index'
    end

    def show
        @question = Question.find(params[:id])

        render 'api/questions/show'

    end

    def edit
        @question = Question.find(params[:id])

        render 'api/questions/edit'
    end

    def destroy
        @question = Question.find(params[:id])

        if @question
            @question.destroy
            render :show
        else
            render ['No such question']
        end

    end


    private

    def question_params
        params.require(:question).permit(:title, :body, :author_id)
    end

end
