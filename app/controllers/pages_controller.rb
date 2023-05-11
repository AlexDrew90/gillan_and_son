class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home, :contact ]

  def home
    @reviews = Review.all
  end

  def contact
  end

  def cms
    @gallery_items = GalleryItem.all
    @reviews = Review.all
    @materials = Material.all
    @brands = Brand.all
  end
end
