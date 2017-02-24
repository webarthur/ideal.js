"use strict";

var $e = function $e(e) {
  return document.getElementById(e) || {};
};
var $all = function $all(t) {
  var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.body;
  return p.getElementsByTagName(t) || {};
};
var $find = function $find(q) {
  var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return p.querySelector(q) || {};
};
var $findAll = function $findAll(q) {
  var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return p.querySelectorAll(q) || [];
};
$ || ($ = $findAll);

// var $E = Element.prototype

Date.isLeapYear = function (y) {
  return y % 4 == 0 && (y % 100 != 0 || y % 400 == 0);
};