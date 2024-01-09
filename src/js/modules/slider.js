import {
  initSlider
} from './utils.js';
import {
  Options
} from './options.js';

const initSliders = () => {
  initSlider( '.bestsellers__products', Options.Swiper.Bestsellers );
  initSlider( '.related__products', Options.Swiper.Bestsellers );
  initSlider( '.upsells__products', Options.Swiper.Bestsellers );
  initSlider( '.cross-sells__products', Options.Swiper.CrosSells );
  initSlider( '.main-blog__articles', Options.Swiper.Blog );
  initSlider( '.product-images__slider', Object.assign( Options.Swiper.Product, {
    thumbs: {
      swiper: initSlider( '.product-images__thumbs', Options.Swiper.ProductThumbs ),
    },
  } ) );
};

export {
  initSliders,
};
