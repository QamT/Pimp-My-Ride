import * as u from 'Utilities';
import ScrollReveal from 'scrollreveal';

export default class Featured {
  constructor(el) {
    this.el = el;
    this.setupDOM();
    // this.bindEvents();
    this.init();
  }

  setupDOM() {
    this.companies = u.queryAll('.featured i');
  }

  // bindEvents() {

  // }

  init() {
    this.companies.forEach((el, i) => ScrollReveal().reveal(el, {
      distance: '50%',
      origin: 'bottom',
      duration: 600,
      delay: 75 * i,
      easing: 'ease-in-out',
    }));
  }
}
