'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Element.prototype.css = function (n, v) {
  if (typeof v == 'undefined') {
    if ((typeof n === 'undefined' ? 'undefined' : _typeof(n)) == 'object') {
      var k = Object.keys(n);
      var l = k.length;
      for (var i = 0; i < l; i++) {
        this.css(k[i], n[k[i]]);
      }
    } else {
      return this.style[n];
    }
  } else {
    this.style[n] = v;
  }
  return this;
};