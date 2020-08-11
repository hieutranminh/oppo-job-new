import Common from "./modules/common";
import Home from "./modules/home";
import About from "./modules/about";
import VideoLazyLoad from "./modules/lazy-load-video";

let lazyLoadVideo = new VideoLazyLoad();

$(document).ready(function () {
  // Behavior Use For All Page
  let common = new Common();

  // Behavior for HomePage
  if ($("#hr-home-page").length > 0) {
    let home = new Home();
  }

  // Behavior for About Page
  if ($("#hr-about-page").length > 0) {
    let about = new About();
  }
});
