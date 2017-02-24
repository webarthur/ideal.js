'use strict';

Element.prototype.preppend = function (html) {
	this.insertAdjacentHTML('afterbegin', html);
	return this;
};