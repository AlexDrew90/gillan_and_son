class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home, :contact ]

  def home
    @reviews = Review.all
  end

  def contact
  end
end
