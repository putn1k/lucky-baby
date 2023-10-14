import {
  iosVhFix,
} from './modules/utils.js';

import {
  initModals,
} from './modules/modal.js';

import {
  initPopupMenus,
} from './modules/header.js';

import {
  initScrollTop
} from './modules/scroll-top.js';

import {
  validateForms
} from './modules/validate.js';

document.addEventListener( 'DOMContentLoaded', () => {
  iosVhFix();
  window.addEventListener( 'load', () => {
    initModals();
    initScrollTop();
    validateForms();
    initPopupMenus();
  } );
} );
