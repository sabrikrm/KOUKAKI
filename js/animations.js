document.addEventListener("DOMContentLoaded", () => {
  /*
   * Parallaxe banner
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




  /* Nuages section lieu */

const placeSection = document.querySelector("#place");
const cloudsContainer = document.querySelector(".clouds-container");

if (placeSection && cloudsContainer) {
  window.addEventListener("scroll", () => {
    const rect = placeSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    let progress = (windowHeight - rect.top) / windowHeight;
    progress = Math.max(0, Math.min(progress, 1));

    const translateX = progress * -300;

    cloudsContainer.style.transform = `translateX(${translateX}px)`;
  });
}

  /*
   * Animation des titres au scroll

 */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("title-visible");
    }
  });
});

document
.querySelectorAll("h2 span, h3 span")
.forEach(title => observer.observe(title));


  /*
   le menu en full page pas oublier emoji fleur etc
   */
 const burger = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-navigation");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  document.body.classList.toggle("menu-open"); /*overflow hidden */
});

document.querySelectorAll(".fullscreen-menu a")
.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});
});