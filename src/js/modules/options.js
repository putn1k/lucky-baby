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
      rootMargin: '300px',
      threshold: 1
    },
    ScrollTop: {
      rootMargin: '600px',
      threshold: 1,
    },
  },
  Requests: {
    HandlerURL: 'https://jsonplaceholder.typicode.com/posts',
  },
  Swiper: {
    Services: {
      navigation: {
        prevEl: '.services__slider-controls [data-to-slide="prev"]',
        nextEl: '.services__slider-controls [data-to-slide="next"]',
      },
      pagination: {
        el: '.services__slider-pagination',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
      },
    },
  }
};
