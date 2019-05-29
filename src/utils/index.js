export const query = (selector, element = document) => element.querySelector(selector);

export const queryAll = (selector, element = document) => [...element.querySelectorAll(selector)];

export const event = (element, eventName, handler, context) => (
  element.addEventListener(eventName, handler.bind(context))
);

export const eventAll = (elements, eventName, handler, context) => (
  elements.forEach(element => (event(element, eventName, handler, context)))
);

export const attr = (element, attribute, value) => element.setAttribute(attribute, value);

export const getAttr = (element, attribute) => element.getAttribute(attribute);

export const addClass = (element, className) => element.classList.add(className);

export const removeClass = (element, className) => element.classList.remove(className);

export const toggleClass = (element, className) => element.classList.toggle(className);
