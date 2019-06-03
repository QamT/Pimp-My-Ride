import Base from './modules/Base';
import './styles/main.scss';

window.addEventListener('DOMContentLoaded', () => {
  new Base(document.body);
  [...document.querySelectorAll('[data-module')].forEach((el) => {
    const name = el.getAttribute('data-module');
    const Module = require(`./modules/${name}`).default;
    new Module(el);
  });
});
