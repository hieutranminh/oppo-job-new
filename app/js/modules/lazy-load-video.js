export default class LazyLoadVideo {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  constructor() {
    // Lazy Load Video Function
    document.addEventListener("DOMContentLoaded", () => {
      /* ===== LAZY LOAD VIDEO ===== */
      var lazyVideos = [].slice.call(
        document.querySelectorAll("video.lazy-video-desktop")
      );

      if (window.innerWidth <= 768) {
        var lazyVideos = [].slice.call(
          document.querySelectorAll("video.lazy-video-mobile")
        );
      }

      if ("IntersectionObserver" in window) {
        var lazyVideoObserver = new IntersectionObserver(function (
          entries,
          observer
        ) {
          entries.forEach(function (video) {
            if (video.isIntersecting) {
              for (var source in video.target.children) {
                var videoSource = video.target.children[source];
                if (
                  typeof videoSource.tagName === "string" &&
                  videoSource.tagName === "SOURCE"
                ) {
                  videoSource.src = videoSource.dataset.src;
                }
              }

              video.target.load();
              video.target.classList.remove("lazy");
              lazyVideoObserver.unobserve(video.target);
            }
          });
        });

        lazyVideos.forEach(function (lazyVideo) {
          lazyVideoObserver.observe(lazyVideo);
        });
      }
    });
  }
}
