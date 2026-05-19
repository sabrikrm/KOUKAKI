document.addEventListener("DOMContentLoaded", function () {

  // Animation titres
  const titles = document.querySelectorAll("h2, h3");

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  });

  titles.forEach(function (title) {
    title.classList.add("animate-title");
    observer.observe(title);
  });


  // Parallaxe hero
  const bannerVideo = document.querySelector(".banner__video");
  const bannerLogoWrapper = document.querySelector(".banner__logo-wrapper");

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;

    if (bannerVideo && bannerLogoWrapper) {
      bannerVideo.style.transform = `translateY(${scrollPosition * 0.15}px)`;
      bannerLogoWrapper.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
  });


  // SWIPER
  const swiper = new Swiper('.swiper-container', {
    slidesPerView : 3,
    
    loop: true,
    autoplay: {  
        delay: 1500,
         disableOnInteraction: false,
          
         
    },
    grabCursor: true,
    centeredSlides: true,
    effect: 'coverflow',
    coverflowEffect: {
         rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
       
    },
});



});