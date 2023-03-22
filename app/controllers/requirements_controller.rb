class RequirementsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index]
  def index
    @requirements = Requirement.all
  end
end
