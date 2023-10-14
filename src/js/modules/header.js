import {
  isEscKey,
} from './utils.js';

export const initPopupMenus = () => {
  const popupTriggerNode = document.querySelectorAll( '[data-trigger]' );

  function hideAll() {
    document.querySelectorAll( '[data-popup].is-show' ).forEach( ( popup ) => hidePopup( popup ) );
    document.removeEventListener( 'click', onMissclickHandler );
    document.removeEventListener( 'keydown', onEcsKeydownHandler );
  }

  function hidePopup( currentPopup ) {
    document.querySelectorAll( '[data-trigger].is-expanded' ).forEach( ( trigger ) => trigger.classList.remove( 'is-expanded' ) );
    document.documentElement.classList.remove( 'is-open-popup' );
    currentPopup.classList.remove( 'is-show' );
  }

  function showPopup( currentPopup, currentTrigger ) {
    hideAll();
    document.addEventListener( 'click', onMissclickHandler );
    document.addEventListener( 'keydown', onEcsKeydownHandler );
    currentTrigger.classList.add( 'is-expanded' );
    currentPopup.classList.add( 'is-show' );
    document.documentElement.classList.add( 'is-open-popup' );
  }

  const onMissclickHandler = ( evt ) => {
    if ( !evt.target.closest( '[data-popup]' ) &&
      !evt.target.closest( '[data-trigger]' ) &&
      document.documentElement.classList.contains( 'is-open-popup' ) ) {
      hideAll();
    }
  };

  const onClickHandler = ( evt ) => {
    evt.preventDefault();
    const currentTrigger = evt.target.closest( '[data-trigger]' );
    const currentPopulName = currentTrigger.dataset.trigger;
    const currentPopup = document.querySelector( `[data-popup=${currentPopulName}]` );

    if ( !currentPopup ) return;

    currentPopup.classList.contains( 'is-show' ) ?
      hidePopup( currentPopup, currentTrigger ) :
      showPopup( currentPopup, currentTrigger );
  };

  const setupPopup = ( btn ) => {
    btn.addEventListener( 'click', onClickHandler );
  };

  const onEcsKeydownHandler = ( evt ) => {
    if ( isEscKey( evt ) ) {
      hideAll();
    }
  };

  popupTriggerNode.forEach( setupPopup );
};
