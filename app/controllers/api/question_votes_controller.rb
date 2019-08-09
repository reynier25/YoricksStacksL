class Api::QuestionVotesController < ApplicationController

    def index
        @question_votes = QuestionVote.all

        question = params[:questionId]
        @question_votes = QuestionVote.where(question_id: question)
        render 'api/question_votes/index'
    end


    def create
        @question_vote = QuestionVote.new(question_vote_params)
        # @question_vote = QuestionVote.new({question_id: 1, user_id: 2, upvoted: true})
        @question_vote.save
        render 'api/question_votes/show'


        # if @question_vote.save
        #     render 'api/question_votes/show'
        # else
        #     render json: @question_vote.errors.full_messages, status: 402
        # end
    end

    def destroy
        @question_vote = QuestionVote.find_by(
            question_id: params[:question_vote][:question_id],
            user_id: params[:question_vote][:user_id]
        )

        # @question_vote.destroy
        # debugger;
        # render 'api/question_votes/show'

        if @question_vote
            @question_vote.destroy
            render 'api/question_votes/show'
        else
            render json: @question_vote.errors.full_messages, status: 402
        end


    end


    private

    def question_vote_params
        params.require(:question_vote).permit(:question_id, :user_id, :upvoted)
    end

end
