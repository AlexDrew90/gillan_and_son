class MaterialsController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :index ]
  def index
    @materials = Material.all
  end
end
