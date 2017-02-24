var $e = e => document.getElementById(e) || {}
var $all = (t, p = document.body) => p.getElementsByTagName(t) || {}
var $find = (q, p = document) => p.querySelector(q) || {}
var $findAll = (q, p = document) => p.querySelectorAll(q) || []
$ || ($=$findAll)

// var $E = Element.prototype

Date.isLeapYear = y => (y % 4 == 0) && ((y % 100 != 0) || (y % 400 == 0))
