'use strict';

Element.prototype.after = function (html) {
	this.insertAdjacentHTML('afterend', html);
	return this;
};