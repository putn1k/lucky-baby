import {
  initSlider
} from './utils.js';
import {
  Options
} from './options.js';

const initSliders = () => {
  initSlider( '.bestsellers__products', Options.Swiper.Bestsellers );
  initSlider( '.main-blog__articles', Options.Swiper.Blog );
};

export {
  initSliders,
};
