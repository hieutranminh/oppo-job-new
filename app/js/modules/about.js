export default class About {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  constructor() {
    this.bindEvents();
  }

  /* ===================================
   *  EVENTS
   * =================================== */
  bindEvents() {
    this.SetupAbout();
  }

  /* ===================================
   *  METHODS
   * =================================== */
  SetupAbout() {
    this.SetupHistorySlider();
    this.SetupVideoBanner();
    this.SetupScrollDetect();
    this.SetupCultureSlider();
  }

  SetupCultureSlider() {
    // Elements Variable
    if (window.innerWidth > 768) {
      this.$cultureSection = $("#about-culture-2");
      this.$cultureImages = this.$cultureSection.find(
        ".images-holder .img-block"
      );
      this.$cultureIntros = this.$cultureSection.find(
        ".intros-holder .intro-item"
      );
      this.currentCultureActive = 0;
      this.blockCultureInteraction = false;
      this.ActiveCulture(1);

      this.$cultureIntros.on("click", (e) => {
        let targetParent = $(e.target).parents(".intro-item");
        let targetID = parseInt(targetParent.data("culture-id"));

        if ($(e.target).hasClass("intro-item")) {
          targetID = parseInt($(e.target).data("culture-id"));
        }

        this.ActiveCulture(targetID);
      });
    } else {
      this.$cultureSlider = $(".culture-mb-slider .culture-slider");
      this.cultureSwiper = new Swiper(".culture-slider", {
        slidesPerView: 2,
        spaceBetween: 30,
        centeredSlides: true,
        speed: 550,
        navigation: {
          nextEl: ".culture-button-next",
          prevEl: ".culture-button-prev",
        },
      });
    }
  }

  ActiveCulture(ID) {
    if (this.currentCultureActive !== ID && !this.blockCultureInteraction) {
      clearTimeout(this.nextSlideTimeOut);
      this.blockCultureInteraction = true;
      this.currentCultureActive = ID;

      let $activeImage = this.$cultureSection.find(
        ".images-holder .img-block.active"
      );
      let $activeIntro = this.$cultureSection.find(
        ".intros-holder .intro-item.active"
      );

      $activeImage.removeClass("active");
      $activeIntro.removeClass("active");

      let $targetImage = this.$cultureSection.find(
        `.images-holder .img-block[data-culture-id="${ID}"]`
      );
      let $targetIntro = this.$cultureSection.find(
        `.intros-holder .intro-item[data-culture-id="${ID}"]`
      );

      $targetImage.addClass("active");
      $targetIntro.addClass("active");

      setTimeout(() => {
        this.blockCultureInteraction = false;
        this.nextSlideTimeOut = setTimeout(() => {
          switch (this.currentCultureActive) {
            case 1:
              this.ActiveCulture(2);
              break;
            case 2:
              this.ActiveCulture(3);
              break;
            case 3:
              this.ActiveCulture(1);
              break;
            default:
              this.ActiveCulture(1);
              break;
          }
        }, 3600);
      }, 400);
    }
  }

  SetupVideoBanner() {
    this.bannerVideo = $("#popup-intro-video").get(0);
    this.playModalVideo = $(".play-modal-video");
    this.modalVideo = $(".video-modal");
    this.closeVideoModal = $(".close-video-modal");

    this.playModalVideo.on("click", () => {
      this.modalVideo.addClass("show-modal");
      setTimeout(() => {
        this.bannerVideo.play();
      }, 300);
    });

    this.closeVideoModal.on("click", () => {
      this.modalVideo.removeClass("show-modal");
      this.bannerVideo.pause();
      this.bannerVideo.currentTime = 0;
    });

    this.bannerVideo.addEventListener("ended", () => {
      this.modalVideo.removeClass("show-modal");
      this.bannerVideo.pause();
      this.bannerVideo.currentTime = 0;
    });
  }

  SetupHistorySlider() {
    this.historySwiper = new Swiper(".timeline-holder", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      speed: 550,
      initialSlide:
        $(".history-body .swiper-wrapper li.history-item").length - 1,
      navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },
      pagination: {
        el: ".history-pagination",
        type: "bullets",
      },
      breakpoints: {
        780: {
          slidesPerView: 4,
          slidesPerGroup: 2,
        },
        480: {
          slidesPerView: 2,
          slidesPerGroup: 1,
        },
      },
    });
  }

  SetupScrollDetect() {
    this.allSection = {
      intro: {
        el: $("#about-intro"),
        status: false,
      },
      spirit: {
        el: $("#about-spirit"),
        status: false,
      },
      culture: {
        el: $("#about-culture-2"),
        status: false,
      },
      history: {
        el: $("#about-history"),
        status: false,
      },
      achievement: {
        el: $("#about-archivement"),
        status: false,
      },
    };

    $(window).on("scroll load", () => {
      this.DetectScreen();
    });
  }

  ReachSection($target) {
    if ($target.offset().top > 0) {
      if (
        window.pageYOffset > $target.offset().top - window.innerHeight / 1.15 &&
        window.pageYOffset < $target.offset().top + window.innerHeight / 1.15
      ) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }

  DetectScreen() {
    if (!this.allSection.intro.status) {
      if (this.ReachSection(this.allSection.intro.el)) {
        this.allSection.intro.el.removeClass("is-hiding");
        this.allSection.intro.status = true;
      }
    }

    if (!this.allSection.spirit.status) {
      if (this.ReachSection(this.allSection.spirit.el)) {
        this.allSection.spirit.status = true;
        this.allSection.spirit.el.removeClass("is-hiding");
      }
    }

    if (!this.allSection.culture.status) {
      if (this.ReachSection(this.allSection.culture.el)) {
        this.allSection.culture.status = true;
        this.allSection.culture.el.removeClass("is-hiding");
      }
    }

    if (!this.allSection.history.status) {
      if (this.ReachSection(this.allSection.history.el)) {
        this.allSection.history.status = true;
        this.allSection.history.el.removeClass("is-hiding");
      }
    }

    if (!this.allSection.achievement.status) {
      if (this.ReachSection(this.allSection.achievement.el)) {
        this.allSection.achievement.status = true;
        this.allSection.achievement.el.removeClass("is-hiding");
      }
    }
  }
}
