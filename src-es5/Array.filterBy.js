'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// 05/12/16
Array.prototype.filterBy = function (key, val, returnFirst) {
  if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) == 'object') {
    returnFirst = val;
  }
  var item = this.filter(function (x) {
    if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) == 'object') {
      var check = true;
      Object.keys(key).forEach(function (k) {
        check = check && x[k] == key[k];
      });
      return check;
    } else {
      return x ? x[key] == val : false;
    }
  });

  return returnFirst ? item[0] : item;
};