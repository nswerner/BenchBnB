class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user
            login!(@user)
            render json: @user
        else
            render json: ['Nope. Wrong Credentials!!!!'], status: 401
        end
    end


    def destroy
        @user = current_user

        if @user 
            logout!
            render json: { message: 'Logout successful' }
        else
            render json: { message: 'Error' }, status: 404
        end
    end
end
