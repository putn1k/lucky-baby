import {
  iosVhFix,
} from './modules/utils.js';

import {
  initModals,
} from './modules/modal.js';

import {
  initCouponModal,
} from './modules/coupon.js';

import {
  initPopupMenus,
  initFixHeader
} from './modules/header.js';

import {
  initScrollTop
} from './modules/scroll-top.js';

import {
  validateForms
} from './modules/validate.js';

import {
  initSliders,
} from './modules/slider.js';

document.addEventListener( 'DOMContentLoaded', () => {
  iosVhFix();
  initFixHeader();
  window.addEventListener( 'load', () => {
    initModals();
    initScrollTop();
    validateForms();
    initPopupMenus();
    initSliders();
    initCouponModal();
  } );
} );
