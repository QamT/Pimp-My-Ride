import * as u from 'Utilities';
import ScrollReveal from 'scrollreveal';

export default class Contact {
  constructor(el) {
    this.el = el;
    this.setupDOM();
    // this.bindEvents();
    this.init();
  }

  setupDOM() {
    this.form = u.query('form');
  }

  // bindEvents() {

  // }

  init() {
    ScrollReveal().reveal(this.form, {
      distance: '50%',
      origin: 'bottom',
      duration: 600,
      delay: 75,
      easing: 'ease-in-out',
    });
  }
}
