'use strict';

Element.prototype.on = function (evt, fn) {
			if (this.addEventListener) this.addEventListener(evt, fn, false);else if (this.attachEvent) this.attachEvent('on' + evt, fn);
			return this;
};