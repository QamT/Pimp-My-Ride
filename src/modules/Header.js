import { jarallax } from 'jarallax';

export default class Header {
  constructor(el) {
    this.el = el;
    // this.setupDOM();
    // this.bindEvents();
    this.init();
  }

  // setupDOM() {

  // }

  // bindEvents() {

  // }

  init() {
    jarallax(this.el, { speed: 0.3 });
  }
}
