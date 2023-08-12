document.addEventListener('DOMContentLoaded', () => {
  /* Burger
    ========================================================================== */
  const burger = document.querySelector('.burger'),
    burgerVisible = document.querySelector('.burger__visible'),
    burgerHiden = document.querySelector('.burger__hiden'),
    nav = document.querySelector('.nav'),
    body = document.getElementsByTagName('body'),
    popup = document.querySelector('.popup');

  burgerOpen = () => {
    burger.addEventListener('click', () => {
      document.querySelector('.header').classList.toggle('active');
      document.querySelector('.header').classList.toggle('hide');
      document.querySelector('.header__container a').classList.toggle('active');
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
          document.querySelector('.header').classList.add('active');
        } else if (window.scrollY < 1) {
          document.querySelector('.header').classList.remove('active');
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
    const menuPopup = document.querySelector('.menu__popup'),
      menuImage = document.querySelector('.menu__image'),
      menuTitle = document.querySelectorAll('.popup-link'),
      paddingScrollbar =
        window.innerWidth - document.querySelector('.main').offsetWidth + 'px';

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
          document.querySelector('.header').classList.add('active');
        } else if (window.scrollY < 1) {
          document.querySelector('.header').classList.remove('active');
        }
      }
      document.querySelector('.header').classList.remove('hide');
      document.querySelector('.header__container a').classList.remove('active');
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