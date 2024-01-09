export const Options = {
  SmoothScroll: {
    speed: 900,
    speedAsDuration: true,
    updateURL: false,
  },
  Modal: {
    linkAttributeName: false,
    catchFocus: true,
    closeOnEsc: true,
    backscroll: true,
  },
  Mask: {
    countryCode: '+971',
    bodyMask: ' ___ ___ ____',
  },
  ValidationErrors: {
    errorFieldCssClass: 'is-invalid',
    errorLabelCssClass: 'is-error-label',
    errorLabelStyle: {
      color: 'var(--error)',
      fontSize: '10px',
    },
  },
  Observer: {
    Header: {
      rootMargin: '100px',
      threshold: 0
    },
    ScrollTop: {
      rootMargin: '600px',
      threshold: 1,
    },
  },
  Requests: {
    HandlerURL: 'WP_Options.AJAX_URL',
  },
  Swiper: {
    CrosSells: {
      slidesPerView: 1.4,
      breakpoints: {
        1200: {
          slidesPerView: 2.4,
        },
      },
    },
    Bestsellers: {
      slidesPerView: 1.4,
      breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1600: {
          slidesPerView: 4,
        },
      },
    },
    Blog: {
      slidesPerView: 1,
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
        1600: {
          slidesPerView: 4,
        },
      },
    },
    Product: {
      slidesPerView: 1,
      spaceBetween: 0,
      preloadImages: false,
      loop: true,
      lazy: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
    },
    ProductThumbs: {
      slidesPerView: 4,
      spaceBetween: 6,
      breakpoints: {
        768: {
          direction: 'vertical'
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 16,
          direction: 'horizontal'
        },
        1600: {
          slidesPerView: 4,
          direction: 'vertical'
        },
      },
    },
  }
};
