$S.decodeHTMLEntities = function () {
  var el = document.createElement('div')
	var str = this

	el.innerHTML = str
	str = el.textContent
	el.remove()

	return str
}
