String.prototype.decodeHTMLEntities = function() {
  var el = document.createElement('div');
	var str = this;

	el.innerHTML = str;
	str = el.textContent;
	el.removeChild(el.childNodes[0]);

	return str;
};
