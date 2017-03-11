var $e = (e, p = document) => p.getElementById(e) || {}
var $all = (t, p = document.body) => p.getElementsByTagName(t) || {}
var $find = (q, p = document) => p.querySelector(q) || {}
var $findAll = (q, p = document) => p.querySelectorAll(q) || []
var $ = typeof $=='undefined'? $findAll : $

var $E = Element.prototype
$E.get =  function (id) { return $e(id, this) }
$E.all = function (t) { return $all(t, this) }
$E.find = function (q) { return $find(q, this) }
$E.findAll = function (q) { return $findAll(q, this) }

var $N = NodeList.prototype
var $H = HTMLCollection
var $A = Array.prototype
$N.forEach = $H.forEach = $A.forEach
$N.each = function (func) {
  var l = this.length
  for (var i = 0; i < l; i++) {
    func.apply(this[i], i, this[i])
  }
}

var $doc = document.childNodes[1]
var $body = document.body ? document.body : setTimeout('$body = document.body', 1)
var $head = $doc.find('head')

var $F = HTMLFormElement.prototype
var $L = window.location
var $S = String.prototype

var $html = function (s) {
  var e = document.createElement('div')
  e.innerHTML = s
  return e.children[0]
}
