'use strict';

$E.hide = function () {
	this.style.display = 'none';
	return this;
};
$N.hide = function () {
	var l = this.length;
	for (var i = 0; i < l; this[i++].hide()) {}
};