var $e = e => document.getElementById(e) || {}
var $all = (t, p = document.body) => p.getElementsByTagName(t) || {}
var $find = (q, p = document) => p.querySelector(q) || {}
var $findAll = (q, p = document) => p.querySelectorAll(q) || []
$ || ($=$findAll)

// var $E = Element.prototype
