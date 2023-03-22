require "test_helper"

class RequirementsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get requirements_new_url
    assert_response :success
  end
end
