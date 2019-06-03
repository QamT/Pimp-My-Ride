import * as u from 'Utilities';
import ScrollReveal from 'scrollreveal';

export default class Portfolio {
  constructor(el) {
    this.el = el;
    this.setupDOM();
    // this.bindEvents();
    this.init();
  }

  setupDOM() {
    this.images = u.queryAll('.portfolio_item');
  }

  // bindEvents() {

  // }

  init() {
    this.images.forEach((el, i) => {
      ScrollReveal().reveal(el, {
        distance: '50%',
        origin: 'bottom',
        duration: 400,
        delay: 75 * i,
        easing: 'ease-in-out',
      });
    });
  }
}
