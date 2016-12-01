Element.prototype.before = function(html) {
	this.insertAdjacentHTML('beforebegin', html);
	return this;
};
