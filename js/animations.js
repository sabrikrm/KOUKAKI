document.addEventListener("DOMContentLoaded", function () {

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


console.log('swiper actif')



});

document.addEventListener("DOMContentLoaded", () => {

    const placeSection = document.querySelector("#place");

    const clouds = document.querySelectorAll(
        "#place .bigCloud, #place .littleCloud"
    );

    if (!placeSection || clouds.length === 0) {
        return;
    }

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

        clouds.forEach((cloud) => {
            cloud.style.transform = `translateX(${translateX}px)`;
        });

    });

});

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