class MaterialsController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :index ]
  def index
    @materials = Material.all
    @brands = Brand.all
  end

  def show
    @material = Material.find(params[:id])
  end

  def new
    @material = Material.new
  end
end
