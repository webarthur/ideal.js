'use strict';

Element.prototype.hide = function () {
	this.style.display = 'none';
	return this;
};
NodeList.prototype.hide = function () {
	for (var i = 0; i < this.length; i++) {
		this[i].hide();
	}
};