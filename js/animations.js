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

const placeSection = document.querySelector("#place");
const cloudsContainer = document.querySelector(".clouds-container");

if (placeSection && cloudsContainer) {
  const cloudObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          cloudsContainer.classList.add("clouds-visible");
        } else {
          cloudsContainer.classList.remove("clouds-visible");
        }
      });
    },
    {
      threshold: 0.4,
    }
  );

  cloudObserver.observe(placeSection);
}

  /*
   * Animation des titres au scroll

 */
const sectionTitles = document.querySelectorAll(
  "main h2, main h3"
);

sectionTitles.forEach((title) => {
  if (!title.querySelector("span")) {
    title.innerHTML = `<span>${title.innerHTML}</span>`;
  }
});

const titleSpans = document.querySelectorAll(
  "main h2 span, main h3 span"
);

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

titleSpans.forEach((span) => {
  titleObserver.observe(span);
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