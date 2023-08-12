document.addEventListener('DOMContentLoaded', () => {
  /* const Data
    ========================================================================== */
  const // burger
    burger = document.querySelector('.burger'),
    burgerVisible = document.querySelector('.burger__visible'),
    burgerHiden = document.querySelector('.burger__hiden'),
    //header
    header = document.querySelector('.header'),
    headerLogo = document.querySelector('.header__container a'),
    //nav
    nav = document.querySelector('.nav'),
    navLink = document.querySelectorAll('.nav__item'),
    //section
    section = document.querySelectorAll('.section'),
    //body
    body = document.getElementsByTagName('body'),
    //popup
    popup = document.querySelector('.popup'),
    //menu
    menuPopup = document.querySelector('.menu__popup'),
    menuImage = document.querySelector('.menu__image'),
    menuTitle = document.querySelectorAll('.popup-link'),
    //padding right
    paddingScrollbar =
      window.innerWidth - document.querySelector('.main').offsetWidth + 'px';

  /* Burger
    ========================================================================== */
  burgerOpen = () => {
    burger.addEventListener('click', () => {
      header.classList.toggle('active');
      header.classList.toggle('hide');
      headerLogo.classList.toggle('active');
      burger.classList.toggle('active');
      popup.style.zIndex = '15';
      popup.classList.toggle('active');
      burgerVisible.classList.toggle('active');
      burgerHiden.classList.toggle('active');
      nav.classList.toggle('active');
      body[0].classList.toggle('block');
    });
  };
  burgerOpen();

  /* Header Active On Scroll
    ========================================================================== */
  const headerActive = () => {
    if (window.innerWidth < 992) {
      window.onscroll = () => {
        if (window.scrollY >= 1) {
          header.classList.add('active');
        } else if (window.scrollY < 1) {
          header.classList.remove('active');
        }
      };
    }
  };
  headerActive();
  window.addEventListener('scroll', () => {
    headerActive();
  });
  window.addEventListener('resize', () => {
    headerActive();
  });
  window.addEventListener('onload', () => {
    headerActive();
  });

  /* Nav Links Active On Click
    ========================================================================== */
  const navActiveOnClick = () => {
    for (let i = 0; navLink.length > i; ++i) {
      navLink[i].addEventListener('click', (e) => {
        for (let i = 0; navLink.length > i; ++i) {
          navLink[i].classList.remove('active');
          if (window.innerWidth < 992) {
            nav.classList.remove('active');
            popup.classList.remove('active');
            burgerVisible.classList.remove('active');
            burgerHiden.classList.remove('active');
            body[0].classList.remove('block');
            headerLogo.classList.remove('active');
            if (window.scrollY >= 1) {
              header.classList.add('active');
              header.classList.remove('hide');
            } else if (window.scrollY < 1) {
              header.classList.remove('active');
              header.classList.remove('hide');
            }
          }
        }
        navLink[i].classList.add('active');
        window.scrollTo({
          top: window.pageYOffset + header.offsetHeight,
        });
      });
    }
  };
  navActiveOnClick();

  /* Nav Links Active On Scroll
    ========================================================================== */
  const navInit = () => {
    section.forEach((sec) => {
      if (window.innerWidth > 992) {
        if (window.pageYOffset + 200 >= sec.offsetTop) {
          navLink.forEach((el) => {
            el.classList.remove('active');
            if (el.dataset.link === sec.dataset.section) {
              el.classList.add('active');
            }
          });
        }
      } else {
        if (window.pageYOffset + 50 + header.offsetHeight >= sec.offsetTop) {
          navLink.forEach((el) => {
            el.classList.remove('active');
            if (el.dataset.link === sec.dataset.section) {
              el.classList.add('active');
            }
          });
        }
      }
    });
  };
  navInit();
  window.addEventListener('scroll', () => {
    navInit();
  });
  window.addEventListener('resize', () => {
    navInit();
  });

  /* Place Slider
		========================================================================== */

  const placeSlider = new Swiper('.place-slider', {
    // Optional parameters
    loop: false,
    speed: 1000,
    parallax: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      dynamicMainBullets: 2,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  /* Menu Slider
		========================================================================== */
  const menuSlider = new Swiper('.menu-slider', {
    // Optional parameters
    loop: false,
    speed: 1000,
    spaceBetween: 30,
    autoHeight: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      dynamicMainBullets: 2,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  /* Menu Popup
    ========================================================================== */

  const menuImageShow = () => {
    for (let i = 0; menuTitle.length > i; ++i) {
      menuTitle[i].addEventListener('click', () => {
        popup.classList.add('active');
        popup.style.zIndex = '19';
        nav.style.display = 'none';
        menuPopup.classList.add('active');
        body[0].classList.add('block');
        body[0].style.paddingRight = paddingScrollbar;
        menuImage.src = menuData[i].img;
      });
    }

    popup.addEventListener('click', (e) => {
      e.currentTarget.classList.remove('active');
      menuPopup.classList.remove('active');
      nav.classList.remove('active');
      nav.style.display = 'flex';
      burger.classList.remove('active');
      burgerVisible.classList.remove('active');
      burgerHiden.classList.remove('active');
      if (window.innerWidth < 992) {
        if (window.scrollY >= 1) {
          header.classList.add('active');
        } else if (window.scrollY < 1) {
          header.classList.remove('active');
        }
      }
      header.classList.remove('hide');
      headerLogo.classList.remove('active');
      body[0].classList.remove('block');
      body[0].style.paddingRight = '0';
    });
  };
  menuImageShow();

  const menuData = [
    /* Starter
      ========================================================================== */
    {
      img: './images/menu/starter/1.jpg',
    },
    {
      img: './images/menu/starter/2.jpg',
    },
    {
      img: './images/menu/starter/3.jpg',
    },
    {
      img: './images/menu/starter/4.jpg',
    },
    /* Main
      ========================================================================== */
    {
      img: './images/menu/main/1.jpg',
    },
    {
      img: './images/menu/main/2.jpg',
    },
    {
      img: './images/menu/main/3.jpg',
    },
    {
      img: './images/menu/main/4.jpg',
    },
    /* Desserts
      ========================================================================== */
    {
      img: './images/menu/desserts/1.jpg',
    },
    {
      img: './images/menu/desserts/2.jpg',
    },
    {
      img: './images/menu/desserts/3.jpg',
    },
    {
      img: './images/menu/desserts/4.jpg',
    },
    {
      img: './images/menu/desserts/5.jpg',
    },
    {
      img: './images/menu/desserts/6.jpg',
    },
    /* Drinks
      ========================================================================== */
    {
      img: './images/menu/drinks/1.jpg',
    },
    {
      img: './images/menu/drinks/2.jpg',
    },
    {
      img: './images/menu/drinks/3.jpg',
    },
    {
      img: './images/menu/drinks/4.jpg',
    },
  ];

  /* Daily Special Slider
		========================================================================== */
  const dailySlider = new Swiper('.daily-special-slider', {
    loop: false,
    speed: 2000,
    parallax: true,
    allowTouchMove: false,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        parallax: false,
      },
      768: {
        slidesPerView: 3,
        parallax: false,
      },
      1200: {
        slidesPerView: 4,
        parallax: false,
      },
      loop: true,
    },
  });

  /* Daily Images
    ========================================================================== */

  const dailyImage = document.querySelectorAll('.daily-special-slide img');

  const dailyData = [
    /* Daily Special Images
      ========================================================================== */
    {
      img: './images/daily/1.jpg',
    },
    {
      img: './images/daily/2.jpg',
    },
    {
      img: './images/daily/3.jpeg',
    },
    {
      img: './images/daily/4.jpeg',
    },
    {
      img: './images/daily/5.jpg',
    },
    {
      img: './images/daily/6.jpeg',
    },
    {
      img: './images/daily/7.jpg',
    },
  ];

  const dailyImagesShow = () => {
    for (let i = 0; dailyImage.length > i; ++i) {
      dailyImage[i].src = dailyData[i].img;
    }
  };
  dailyImagesShow();
});


/* Scroll On Click */
$(function () {
  $('[data-scroll').click(function (event) {
    event.preventDefault();

    let blockId = $(this).data('scroll'),
      header = document.querySelector('.header');

    if ($(window).width() < 1024) {
      let blockOffset = $(blockId).offset().top - header.offsetHeight;

      $('html, body').animate(
        {
          scrollTop: blockOffset,
        },
        900
      );
    } else {
      let blockOffset = $(blockId).offset().top;

      $('html, body').animate(
        {
          scrollTop: blockOffset,
        },
        900
      );
    }
  });
});