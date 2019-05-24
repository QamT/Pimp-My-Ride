import './styles/main.scss';

window.addEventListener('DOMContentLoaded', () => {
  [...document.querySelectorAll('[data-module')].forEach((el) => {
    const name = el.getAttribute('data-module');
    const Module = require(`./modules/${name}`).default;
    new Module(el);
  });
});

// carousel
// transition on view
