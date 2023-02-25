class GalleryItemsController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :index ]
  def index
    @gallery_items = GalleryItem.all
  end
end
