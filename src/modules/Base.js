import * as u from 'Utilities';

export default class Base {
  constructor(el) {
    this.el = el;
    this.setupDOM();
    this.bindEvents();
    this.init();
  }

  setupDOM() {
    this.mainContainer = u.query('.main-container', this.el);
    this.loader = u.query('.loader', this.el);
    this.nav = u.query('.nav', this.el);
  }

  bindEvents() {
    u.event(window, 'scroll', this.switchNavPosition, this);
  }

  switchNavPosition() {
    if (window.pageYOffset > 350) u.addClass(this.nav, 'nav--fixed');
    else u.removeClass(this.nav, 'nav--fixed');
  }

  init() {
    setTimeout(() => u.addClass(this.loader, 'loader-fade'), 3000);
    u.addClass(this.mainContainer, 'transition--active');
  }
}
