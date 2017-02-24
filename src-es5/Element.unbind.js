"use strict";

// http://stackoverflow.com/questions/3387427/remove-element-by-id
Element.prototype.unbind = function (type, handle) {
	document.removeEventListener ? this.removeEventListener(type, handle, false) : this.detachEvent("on" + type, handle);
};