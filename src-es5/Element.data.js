'use strict';

$E.data = function (opt, v) {
	if (typeof v == 'undefined') return this.getAttribute('data-' + opt);

	this.setAttribute('data-' + opt, v);

	return this;
};