import $ from '../core';

$.prototype.on = function (eventName, calllBack) {
  if (!eventName || !calllBack) {
    return this;
  }
  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener(eventName, calllBack);
  }
  return this;
};

$.prototype.off = function (eventName, calllBack) {
  if (!eventName || !calllBack) {
    return this;
  }
  for (let i = 0; i < this.length; i++) {
    this[i].removeEventListener(eventName, calllBack);
  }
  return this;
};

$.prototype.click = function (handler) {
  for (let i = 0; i < this.length; i++) {
    if (!handler) {
      this[i].click();
    }
    this[i].addEventListener('click', handler);
  }
  return this;
};