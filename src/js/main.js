document.addEventListener("DOMContentLoaded", () => {
  /* GALLERY SWIPER */
  const gallerySwiper = new Swiper(".gallery__swiper", {
    loop: false,
    speed: 1000,
    parallax: true,
    navigation: {
      nextEl: ".gallery__button-next",
      prevEl: ".gallery__button-prev",
    },
    pagination: {
      el: ".gallery__pagination",
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 2,
    },
  });

  /* MENU SWIPER */
  const menuSwiper = new Swiper(".menu__swiper", {
    loop: false,
    speed: 1000,
    autoHeight: true,
    navigation: {
      nextEl: ".menu__button-next",
      prevEl: ".menu__button-prev",
    },
    pagination: {
      el: ".menu__pagination",
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 2,
    },
  });

  /* DAILY SPECIAL SWIPER */
  const dailySpecialSwiper = new Swiper(".daily-special__swiper", {
    loop: true,
    speed: 2000,
    parallax: true,
    allowTouchMove: false,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        parallax: false,
      },
      992: {
        slidesPerView: 3,
        parallax: false,
      },
      1200: {
        slidesPerView: 4,
        parallax: false,
      },
    },
  });

  /* MENU popup */
  let body = document.getElementsByTagName("body"),
    starter = document.querySelectorAll(".dish-name_starter"),
    main = document.querySelectorAll(".dish-name_main"),
    drinks = document.querySelectorAll(".dish-name_drinks"),
    desserts = document.querySelectorAll(".dish-name_desserts"),
    popupBg = document.querySelector(".menu__popup-background"),
    starterImg = document.querySelectorAll(".menu__image_starter"),
    mainImg = document.querySelectorAll(".menu__image_main"),
    dessertsImg = document.querySelectorAll(".menu__image_desserts"),
    drinksImg = document.querySelectorAll(".menu__image_drinks");
  const popupFun = (dish, popup, img) => {
    for (let i = 0; dish.length > i; ++i) {
      dish[i].addEventListener("click", () => {
        popup.classList.add("active");
        body[0].classList.add("block");
        for (let i = 0; img.length > i; ++i) {
          img[i].classList.remove("active");
        }
        img[i].classList.add("active");
      });
    }
    popup.addEventListener("click", (event) => {
      event.currentTarget.classList.remove("active");
      body[0].classList.remove("block");
    });
  };
  popupFun(starter, popupBg, starterImg);
  popupFun(main, popupBg, mainImg);
  popupFun(desserts, popupBg, dessertsImg);
  popupFun(drinks, popupBg, drinksImg);

  /* Burger */
  const burgerFun = () => {
    let burger = document.querySelector(".header__burger"),
      body = document.getElementsByTagName("body"),
      header = document.querySelector(".header"),
      burgerItemActive = document.querySelector(".header__item-inactive"),
      burgerItemInactive = document.querySelector(".header__item-active"),
      background = document.querySelector(".background"),
      nav = document.querySelector(".nav"),
      links = document.querySelectorAll(".nav__link");

    burger.addEventListener("click", () => {
      burgerItemActive.classList.toggle("active");
      burgerItemInactive.classList.toggle("active");
      body[0].classList.toggle("block");
      header.classList.remove("active");
      background.classList.toggle("active");
      nav.classList.toggle("active");
    });

    for (let i = 0; links.length > i; ++i) {
      links[i].addEventListener("click", (event) => {
        for (let i = 0; links.length > i; ++i) {
          links[i].classList.remove("active");
          background.classList.remove("active");
          burgerItemActive.classList.remove("active");
          burgerItemInactive.classList.remove("active");
          body[0].classList.remove("block");
          nav.classList.remove("active");
        }
        event.currentTarget.classList.add("active");
      });
    }

    background.addEventListener("click", () => {
      event.currentTarget.classList.remove("active");
      burgerItemActive.classList.remove("active");
      burgerItemInactive.classList.remove("active");
      body[0].classList.remove("block");
      nav.classList.remove("active");
    });
  };
  burgerFun();

  /* Header on scroll */
  window.onscroll = () => {
    const header = document.querySelector(".header__head"),
      scrollY = window.scrollY;

    if (scrollY > 30) {
      header.classList.add("active");
    }
    if (scrollY < 30) {
      header.classList.remove("active");
    }
  };

  /* Link active on scroll */
  const navInit = () => {
    const links = document.querySelectorAll(".nav__link"),
      section = document.querySelectorAll(".section"),
      header = document.querySelector(".header__head");
    section.forEach((section) => {
      if (window.pageYOffset + header.offsetHeight >= section.offsetTop) {
        links.forEach((link) => {
          link.classList.remove("active");
          if (link.dataset.section === section.dataset.section) {
            link.classList.add("active");
          }
        });
      }
    });
  };
  navInit();
  window.addEventListener("scroll", () => {
    navInit();
  });
  window.addEventListener("resize", () => {
    navInit();
  });
});

/* Scroll on click */
$(function () {
  $("[data-scroll").click(function (event) {
    event.preventDefault();

    let blockId = $(this).data("scroll"),
      header = document.querySelector(".header__head");

    if ($(window).width() < 1024) {
      let blockOffset = $(blockId).offset().top - header.offsetHeight;

      $("html, body").animate(
        {
          scrollTop: blockOffset,
        },
        900
      );
    } else {
      let blockOffset = $(blockId).offset().top - 50;

      $("html, body").animate(
        {
          scrollTop: blockOffset,
        },
        900
      );
    }
  });
});
