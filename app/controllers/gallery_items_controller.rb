class GalleryItemsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index]
  def index
    @gallery_items = GalleryItem.all
  end

  def show
    @gallery_item = GalleryItem.find(params[:id])
  end

  def new
    @gallery_item = GalleryItem.new
  end
end
