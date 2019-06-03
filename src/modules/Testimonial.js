import * as u from 'Utilities';

export default class Testimonial {
  constructor(el) {
    this.el = el;
    this.slide = 0;
    this.moving = false;
    this.setupDOM();
    this.testimonialLength = this.testimonialSections.length;
    this.bindEvents();
    this.init();
  }

  setupDOM() {
    this.testimonialSections = u.queryAll('.testimonial_section');
    this.prevBtn = u.query('.btn-prev');
    this.nextBtn = u.query('.btn-next');
    this.indicators = u.queryAll('.slide-indicator');
  }

  bindEvents() {
    u.event(this.prevBtn, 'click', this.prevTestimonial, this);
    u.event(this.prevBtn, 'keypress', this.prevTestimonial, this);
    u.event(this.nextBtn, 'click', this.nextTestimonial, this);
    u.event(this.nextBtn, 'keypress', this.nextTestimonial, this);
    this.indicators.forEach((el, i) => el.addEventListener('click', this.clickIndicator.bind(this, i)));
  }

  init() {
    u.addClass(this.testimonialSections[this.testimonialLength - 1], 'prev');
    u.addClass(this.testimonialSections[0], 'active');
    u.addClass(this.testimonialSections[1], 'next');
    u.addClass(this.indicators[0], 'active');
    setInterval(this.autoPlay.bind(this), 5000);
  }

  nextTestimonial(e) {
    e.preventDefault();
    if (u.validateEvent(e) && !this.moving) {
      this.slide = this.slide === this.testimonialLength - 1 ? 0 : ++this.slide;

      this.moveTestimonial(this.slide);
    }
  }

  autoPlay() {
    this.slide = this.slide === this.testimonialLength - 1 ? 0 : ++this.slide;
    this.moveTestimonial(this.slide);
  }

  prevTestimonial(e) {
    e.preventDefault();
    if (u.validateEvent(e) && !this.moving) {
      this.slide = this.slide === 0 ? this.testimonialLength - 1 : --this.slide;

      this.moveTestimonial(this.slide);
    }
  }

  moveTestimonial(slide) {
    if (!this.moving) {
      this.debounce();
      const length = this.testimonialLength;
      const className = 'testimonial_section';
      let newPrev = slide - 1;
      let newNext = slide + 1;
      let oldPrev = slide - 2;
      let oldNext = slide + 2;

      if (newPrev <= 0) oldPrev = length - 1;
      else if (newNext >= length - 1) oldNext = 0;

      if (oldNext > length - 1) oldNext = 0;

      if (slide === 0) {
        newPrev = length - 1;
        oldPrev = length - 2;
        oldNext = slide + 1;
      } else if (slide === length - 1) {
        newPrev = slide - 1;
        newNext = 0;
        oldNext = 1;
      }

      this.testimonialSections[oldPrev].className = className;
      this.testimonialSections[oldNext].className = className;

      this.testimonialSections[newPrev].className = `${className} prev`;
      this.testimonialSections[slide].className = `${className} active`;
      this.testimonialSections[newNext].className = `${className} next`;
      this.changeIndicator(slide);
    }
  }

  changeIndicator(slide) {
    this.indicators.forEach(el => u.removeClass(el, 'active'));
    u.addClass(this.indicators[slide], 'active');
  }

  clickIndicator(slide) {
    this.moveTestimonial(slide);
  }

  debounce() {
    this.moving = true;
    setTimeout(() => {
      this.moving = false;
    }, 500);
  }
}
