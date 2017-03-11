'use strict';

$E.show = function () {
	this.style.display = '';
	this.removeAttribute('hidden');
	return this;
};
$N.show = function () {
	var l = this.length;
	for (var i = 0; i < l; this[i++].show()) {}
	return this;
};