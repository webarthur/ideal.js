'use strict';

var $e = function $e(e) {
  var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return p.getElementById(e) || {};
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
var $ = typeof $ == 'undefined' ? $findAll : $;

var $E = Element.prototype;
$E.get = function (id) {
  return $e(id, this);
};
$E.all = function (t) {
  return $all(t, this);
};
$E.find = function (q) {
  return $find(q, this);
};
$E.findAll = function (q) {
  return $findAll(q, this);
};

var $N = NodeList.prototype;
var $H = HTMLCollection;
var $A = Array.prototype;
$N.forEach = $H.forEach = $A.forEach;
$N.each = function (func) {
  var l = this.length;
  for (var i = 0; i < l; i++) {
    func.apply(this[i], i, this[i]);
  }
};

var $doc = document.childNodes[1];
var $body = document.body;
var $head = $doc.find('head');

var $F = HTMLFormElement.prototype;
var $L = window.location;
var $S = String.prototype;

var $html = function $html(s) {
  var e = document.createElement('div');
  e.innerHTML = s;
  return e.children[0];
};