document.addEventListener("DOMContentLoaded", () => {
  /*
   * Parallaxe Hero
   */
  const bannerVideo = document.querySelector(".banner__video");
  const bannerLogoWrapper = document.querySelector(".banner__logo-wrapper");

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;

    if (bannerVideo && bannerLogoWrapper) {
      bannerVideo.style.transform = `translateY(${scrollPosition * 0.15}px)`;
      bannerLogoWrapper.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
  });

  /*
   * Swiper personnagesss
   */
  if (document.querySelector(".swiper-container")) {
    new Swiper(".swiper-container", {
      slidesPerView: 3,
      loop: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      grabCursor: true,
      centeredSlides: true,
      effect: "coverflow",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }

  /*
   * Nuages section lieu
   */
  /* ==========================
   NUAGES SECTION LIEU
========================== */

const placeSection = document.querySelector("#place");
const cloudsContainer = document.querySelector(".clouds-container");

if (placeSection && cloudsContainer) {

    window.addEventListener("scroll", () => {

        const sectionTop = placeSection.offsetTop;
        const sectionHeight = placeSection.offsetHeight;

        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        const start = sectionTop - windowHeight;
        const end = sectionTop + sectionHeight;

        let progress = (scrollY - start) / (end - start);

        progress = Math.max(0, Math.min(progress, 1));

        const translateX = progress * -300;

        cloudsContainer.style.transform =
            `translateX(${translateX}px)`;

    });

}

  /*
   * Animation des titres au scroll
   */
  const titles = document.querySelectorAll("h2, h3");

  const titleObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("title-visible");
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  titles.forEach((title) => {
    titleObserver.observe(title);
  });

  /*
   le menu en full page pas oublier les emoji fleur etc
   */
  const burger = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-navigation");
  const menuLinks = document.querySelectorAll(".fullscreen-menu a");

  if (burger && nav) {
    burger.addEventListener("click", () => {
      nav.classList.toggle("active");
      document.body.classList.toggle("menu-open");

      const isOpen = nav.classList.contains("active");
      burger.setAttribute("aria-expanded", isOpen);
    });

    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("active");
        document.body.classList.remove("menu-open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }
});