'use strict';

$E.append = function (html) {
	this.insertAdjacentHTML('beforeend', html);
	return this;
};