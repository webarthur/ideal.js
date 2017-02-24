var $e = (e, p = document) => p.getElementById(e) || {}
var $all = (t, p = document.body) => p.getElementsByTagName(t) || {}
var $find = (q, p = document) => p.querySelector(q) || {}
var $findAll = (q, p = document) => p.querySelectorAll(q) || []
$ || ($=$findAll)

var $E = Element.prototype
$E.get =  function (id) { return $e(id, this) }
$E.all = function (t) { return $all(t, this) }
$E.find = function (q) { return $find(q, this) }
$E.findAll = function (q) { return $findAll(q, this) }

var $N = NodeList.prototype
var $H = HTMLCollection
var $A = Array.prototype
$N.forEach = $H.forEach = $A.forEach;
$N.each = function (func) {
  var l = this.length
  for (var i = 0; i < l; i++) {
    func(i, this[i])
  }
}

var $doc = document.childNodes[1];
var $body = document.body;
var $head = $doc.find('head');

var $F = HTMLFormElement.prototype
var $L = window.location
var $S = String.prototype
