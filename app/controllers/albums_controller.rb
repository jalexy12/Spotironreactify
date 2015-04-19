class AlbumsController < ApplicationController
  def home
  end
  def index
  	@albumSearch = params[:q]
  end
end
