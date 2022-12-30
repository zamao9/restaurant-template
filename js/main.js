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
    dish = document.querySelectorAll(".dish-name"),
    popupBg = document.querySelector(".menu__popup-background"),
    img = document.querySelectorAll(".menu__image"),
    lockPadding = document.querySelectorAll(".lock-padding");
  const popupFun = (dish, popup, img) => {
    if (window.innerWidth < 992) {
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
    } else {
      for (let i = 0; dish.length > i; ++i) {
        dish[i].addEventListener("mouseover", () => {
          popup.classList.add("active");
          for (let i = 0; img.length > i; ++i) {
            img[i].classList.remove("active");
          }
          img[i].classList.add("active");
        });
        dish[i].addEventListener("mouseout", () => {
          popup.classList.remove("active");
        });
      }
    }
  };
  popupFun(dish, popupBg, img);

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
  const links = document.querySelectorAll(".nav__link"),
    descktopLinks = document.querySelectorAll(".nav-descktop__link"),
    section = document.querySelectorAll(".section"),
    header = document.querySelector(".header__head");
  const navInit = (link, section, header) => {
    section.forEach((section) => {
      if (window.pageYOffset + header.offsetHeight >= section.offsetTop) {
        link.forEach((li) => {
          li.classList.remove("active");
          if (li.dataset.section === section.dataset.section) {
            li.classList.add("active");
          }
        });
      }
    });
  };
  navInit(links, section, header);
  navInit(descktopLinks, section, header);
  window.addEventListener("scroll", () => {
    navInit(links, section, header);
    navInit(descktopLinks, section, header);
  });
  window.addEventListener("resize", () => {
    navInit(links, section, header);
    navInit(descktopLinks, section, header);
  });

  /* Nav Descktop */
  const linkHover = () => {
    const link = document.querySelectorAll(".nav-descktop__link"),
      span = document.querySelectorAll(".nav-descktop__span");
  };
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
