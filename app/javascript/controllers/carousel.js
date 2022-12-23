import { Controller } from "@hotwired/stimulus"
import Carousel from "stimulus-carousel"

const application = Application.start()
application.register("carousel", Carousel)

export default class extends Controller {
  connect() {
    console.log("HELLOOO!!!!");
  }
}
