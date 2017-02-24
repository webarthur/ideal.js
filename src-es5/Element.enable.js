'use strict';

Element.prototype.enable = function () {
	this.removeAttribute('disabled');
	return this;
};