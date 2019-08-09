class Api::QuestionVotesController < ApplicationController

    def index
        @question_votes = QuestionVote.all
        render 'api/question_votes/index'
    end


    def create
        # @question_vote = QuestionVote.new(question_vote_params)
        @question_vote = QuestionVote.new({question_id: 1, user_id: 2, upvoted: true})

        if @question_vote.save
            render 'api/question_votes/show'
        else
            render json: @question_vote.errors.full_messages, status: 402
        end
    end

    # def destroy
        


    # end


    private

    def question_vote_params
        params.require(:question_vote).permit(:question_id, :user_id, :upvoted)
    end

end
