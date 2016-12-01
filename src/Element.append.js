Element.prototype.append = function(html) {
	this.insertAdjacentHTML('beforeend', html);
	return this;
};
