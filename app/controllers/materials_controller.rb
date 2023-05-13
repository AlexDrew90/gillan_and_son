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

  # def create
  #   @material = Material.new(material_params)
  #   @material.save
  #   redirect_to cms_path
  # end

  def create
    @material = Material.new(material_params)
    if @material.save
      redirect_to cms_path
    else
      flash.now[:alert] = "Error creating material."
      render :new
    end
  end

  def edit
    @material = Material.find(params[:id])
  end

  def update
    @material = Material.find(params[:id])
    @material.update(material_params)
    redirect_to material_path(@material)
  end

  def destroy
    @material = Material.find(params[:id])
    @material.destroy
    redirect_to cms_path, status: :see_other
  end

  private

  def material_params
    params.require(:material).permit(:name, :brand_id, :photo, :material_type)
  end
end
