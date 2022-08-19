import $ from '../core';

$.prototype.addAttribute = function (attributeName, value) {
  for (let i = 0; i < this.length; i++) {
    this[i].setAttribute(attributeName, value);
  }
  return this;
};

$.prototype.removeAttribute = function (attributeName, value) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].attributes) {
      continue;
    }
    this[i].removeAttribute(attributeName, value);
  }
  return this;
};
