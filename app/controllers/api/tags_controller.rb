class Api::TagsController < ApplicationController

    def create
        @tag = Tag.new(tag_params)

        if @tag.save
            render 'api/tags/show'
        else
            render json: @tag.errors.full_messages, status: 402
        end
    end

    def index
        @tags = Tag.all
    end

    def show
        @tag = Tag.find(params[:id])

        render 'api/tags/show'
    end


    private

    def tag_params
        params.require(:tag).permit(:body)
    end

end
