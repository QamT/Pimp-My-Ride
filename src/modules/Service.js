import * as u from 'Utilities';
import ScrollReveal from 'scrollreveal';

export default class Service {
  constructor(el) {
    this.el = el;
    this.setupDOM();
    // this.bindEvents();
    this.init();
  }

  setupDOM() {
    this.cards = u.queryAll('.service_card');
  }

  // bindEvents() {

  // }

  init() {
    this.cards.forEach((el, i) => ScrollReveal().reveal(el, {
      distance: '50%',
      origin: 'bottom',
      duration: 600,
      delay: 75 * i,
      easing: 'ease-in-out',
    }));
  }
}
