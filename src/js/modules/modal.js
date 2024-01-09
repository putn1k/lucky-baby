import {
  Options,
} from './options.js';

const simpleModal = new HystModal( Options.Modal );

const initSimpleModal = ( name = simpleModal, handler = 'data-hystmodal' ) => {
  name.config.linkAttributeName = handler;
  name.init();
};

const initModals = () => {
  initSimpleModal();
};

export {
  simpleModal,
  initModals,
};
