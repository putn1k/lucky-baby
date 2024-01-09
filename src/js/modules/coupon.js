import {
  getCookieByName,
  writeCookieByName,
} from './utils.js';

import {
  simpleModal,
} from './modal.js';

const COOKIE_NAME = 'getCoupon';

const initCouponModal = () => {
  if ( getCookieByName( COOKIE_NAME ) != 'Expired' ) {
    setTimeout( () => {
      simpleModal.open( '#mc4wp-modal' );
      writeCookieByName( COOKIE_NAME );
    }, 1500 );
  }
};

export {
  initCouponModal
};
