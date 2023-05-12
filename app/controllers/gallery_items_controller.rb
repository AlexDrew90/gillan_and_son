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

  def create
    @gallery_item = GalleryItem.new(gallery_item_params)
    @gallery_item.save
    redirect_to gallery_item_path(@gallery_item)
  end

  def edit
    @gallery_item = GalleryItem.find(params[:id])
  end

  def update
    @gallery_item = GalleryItem.find(params[:id])
    @gallery_item.update(gallery_item_params)
    redirect_to gallery_item_path(@gallery_item)
  end

  def destroy
    @gallery_item = GalleryItem.find(params[:id])
    @gallery_item.destroy
    redirect_to gallery_items_path, status: :see_other
  end

  private

  def gallery_item_params
    params.require(:gallery_item).permit(:photo)
  end
end
