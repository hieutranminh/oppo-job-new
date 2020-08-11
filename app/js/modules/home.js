export default class Home {
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
    this.SetupHome();
  }

  /* ===================================
   *  METHODS
   * =================================== */
  SetupHome() {
    this.SetupBannerSlider();
    // this.DrawGlobe();
    this.SetupTestimonialQuote();
    this.SetupScrollDetect();

    if (window.innerWidth <= 768) {
      this.SetupOPPOFamilySlider();
    }
  }

  DrawGlobe() {
    var width = 1440,
      height = 1440;

    var radius = height / 2 - 5,
      scale = radius,
      velocity = 0.02;

    var projection = d3
      .geoOrthographic()
      .translate([width / 2, height / 2])
      .scale(scale)
      .clipAngle(90);

    var canvas = d3
      .select("#the-globe")
      .append("canvas")
      .attr("width", width)
      .attr("height", height);

    var context = canvas.node().getContext("2d");

    var path = d3.geoPath().projection(projection).context(context);

    d3.json(
      "https://gist.githubusercontent.com/mbostock/4090846/raw/d534aba169207548a8a3d670c9c2cc719ff05c47/world-110m.json",
      function (error, world) {
        if (error) throw error;

        var land = topojson.feature(world, world.objects.land);

        d3.timer(function (elapsed) {
          context.clearRect(0, 0, width, height);

          projection.rotate([velocity * elapsed, 0]);
          context.beginPath();
          path(land);
          context.fill();
          context.beginPath();

          // context.arc(width / 2, height / 2, radius, 0, 2 * Math.PI, true);
          // context.lineWidth = .5;
          // context.stroke();
        });
      }
    );

    d3.select(self.frameElement).style("height", height + "px");
  }

  SetupBannerSlider() {
    this.$bannerSliderElement = $("#home-banner .banner-slider");
    this.$bannerSliderElement.slick({
      dots: true,
      infinite: true,
      nextArrow: `<div class="banner-control banner-next"><div class="shape-holder"></div></div>`,
      prevArrow: `<div class="banner-control banner-prev"><div class="shape-holder"></div></div>`,
    });
  }

  SetupTestimonialQuote() {
    this.$memberImageSlider = $(".oppo-member-image-slider");
    this.$memberQuoteSlider = $(".oppo-member-quote-slider");

    this.$sliderControlNextBtn = $(".testimonial-control.next-slide");
    this.$sliderControlPrevBtn = $(".testimonial-control.prev-slide");

    this.$memberQuoteSlider.on("init", () => {
      this.$sliderControlNextBtn.on("click", () => {
        $(".oppo-member-image-slider").slick("next");
      });

      this.$sliderControlPrevBtn.on("click", () => {
        $(".oppo-member-image-slider").slick("prev");
      });
    });

    this.$memberImageSlider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: ".oppo-member-quote-slider",
      dots: false,
    });

    this.$memberQuoteSlider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: ".oppo-member-image-slider",
      dots: true,
      fade: true,
      arrows: false,
    });
  }

  SetupOPPOFamilySlider() {
    this.$familySlider = $(".oppo-family-layout");
    this.$familySlider.slick({
      slidesToShow: 3,
      dots: false,
      arrows: false,
      swipe: true,
      swipeToSlide: true,
      centerMode: true,
    });
  }

  SetupScrollDetect() {
    this.allSection = {
      about: {
        el: $("#home-about-oppo"),
        status: false,
      },
      oppotunities: {
        el: $("#home-job-opportunities"),
        status: false,
      },
      global: {
        el: $("#home-oppo-global"),
        status: false,
      },
      family: {
        el: $("#home-oppo-family"),
        status: false,
      },
      testimonial: {
        el: $("#home-testimonial"),
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
    if (!this.allSection.about.status) {
      if (this.ReachSection(this.allSection.about.el)) {
        this.allSection.about.el.removeClass("is-hiding");
        this.allSection.about.status = true;
      }
    }

    if (!this.allSection.oppotunities.status) {
      if (this.ReachSection(this.allSection.oppotunities.el)) {
        this.allSection.oppotunities.status = true;
        this.allSection.oppotunities.el.removeClass("is-hiding");
      }
    }

    if (!this.allSection.global.status) {
      if (this.ReachSection(this.allSection.global.el)) {
        this.allSection.global.status = true;
        this.allSection.global.el.removeClass("is-hiding");
      }
    }

    if (!this.allSection.family.status) {
      if (this.ReachSection(this.allSection.family.el)) {
        this.allSection.family.status = true;
        this.allSection.family.el.removeClass("is-hiding");
      }
    }

    if (!this.allSection.testimonial.status) {
      if (this.ReachSection(this.allSection.testimonial.el)) {
        this.allSection.testimonial.status = true;
        this.allSection.testimonial.el.removeClass("is-hiding");
      }
    }
  }
}
