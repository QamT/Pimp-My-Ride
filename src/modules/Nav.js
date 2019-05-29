import * as u from 'Utilities';

export default class Nav {
  constructor(el) {
    this.el = el;
    this.setupDOM();
    this.bindEvents();
  }

  setupDOM() {
    this.navContainer = u.query('.nav-links', this.el);
    this.links = u.queryAll('.nav-links a', this.el);
    this.toggle = u.query('.nav-toggle', this.el);
  }

  bindEvents() {
    u.eventAll(this.links, 'click', this.highlightActiveLink, this);
    u.eventAll(this.links, 'keypress', this.highlightActiveLink, this);
    u.event(this.toggle, 'click', this.toggleMenu, this);
    u.event(this.toggle, 'keypress', this.toggleMenu, this);
  }

  highlightActiveLink(e) {
    if (e.key === 'Enter' || e.type === 'click') {
      this.links.forEach(el => u.removeClass(el, 'active'));
      u.addClass(e.target, 'active');
    }
  }

  toggleMenu(e) {
    e.preventDefault();
    if (e.key === 'Enter' || e.type === 'click') {
      const expanded = this.toggle.getAttribute('aria-expanded') === 'true' || false;
      u.attr(this.toggle, 'aria-expanded', !expanded);
      u.toggleClass(this.navContainer, 'toggle');
    }
  }
}
