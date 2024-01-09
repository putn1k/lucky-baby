const disableSubmitBtn = ( form ) => {
  if ( !form.querySelector( '[type="submit"]' ) ) return;
  form.querySelector( '[type="submit"]' ).setAttribute( 'disabled', 'disabled' );
};

const enableSubmitBtn = ( form ) => {
  if ( !form.querySelector( '[type="submit"]' ) ) return;
  form.querySelector( '[type="submit"]' ).removeAttribute( 'disabled' );
};

const isEscKey = ( evt ) => evt.key === 'Escape';

const iosChecker = () => {
  return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes( navigator.platform )
    // iPad on iOS 13 detection
    ||
    ( navigator.userAgent.includes( 'Mac' ) && 'ontouchend' in document );
};

const iosVhFix = () => {
  if ( !( !!window.MSInputMethodContext && !!document.documentMode ) ) {
    if ( iosChecker() ) {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty( '--vh', `${vh}px` );

      window.addEventListener( 'resize', function() {
        vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty( '--vh', `${vh}px` );
      } );
    }
  }
};

const initSlider = ( selector, options = {} ) => {
  if ( !document.querySelector( selector ) ) return;

  const DEFAULT_OPTIONS = {
    slidesPerView: 1,
    spaceBetween: 30,
    watchSlidesProgress: true,
    lazy: true,
  };
  return new Swiper( document.querySelector( selector ), Object.assign( DEFAULT_OPTIONS, options ) );
};

const sendData = ( evt, url, isOk, isError ) => {
  const errorNode = document.documentElement.classList.contains( 'hystmodal__opened' ) ?
    evt.target.closest( '.hystmodal__window' ) :
    evt.target;
  disableSubmitBtn( evt.target );
  fetch( url, {
      method: 'POST',
      body: new FormData( evt.target )
    } )
    .then( ( data ) => {
      if ( data.ok ) {
        isOk();
        evt.target.reset();
      } else {
        isError( errorNode );
      }
    } )
    .catch( () => {
      isError( errorNode );
    } )
    .finally( () => {
      enableSubmitBtn( evt.target );
    } );
};

const getCookieByName = ( name ) => {
  const matches = document.cookie.match( new RegExp( '(?:^|; )' + name.replace( /([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1' ) + '=([^;]*)' ) ); // eslint-disable-line
  return matches ? decodeURIComponent( matches[ 1 ] ) : undefined;
};

const writeCookieByName = ( name ) => {
  const date = new Date;
  date.setDate( date.getDate() + 30 );
  document.cookie = name + '=Expired; path=/; expires=' + date.toUTCString();
};

export {
  isEscKey,
  iosVhFix,
  initSlider,
  sendData,
  getCookieByName,
  writeCookieByName,
};
