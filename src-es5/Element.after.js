'use strict';

$E.after = function (html) {
	this.insertAdjacentHTML('afterend', html);
	return this;
};