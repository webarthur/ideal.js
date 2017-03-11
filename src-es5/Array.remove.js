"use strict";

Array.prototype.remove = function (item, _delete) {
  var i = this.indexOf(item);
  var arr = this;
  if (i > -1) {
    if (_delete) {
      delete arr[i];
    } else {
      arr = arr.splice(i, 1);
    }
  }
  return arr;
};