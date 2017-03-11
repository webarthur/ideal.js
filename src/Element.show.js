$E.hide = function () {
	this.style.display = ''
	this.removeAttribute('hidden')
	return this
}
$N.hide = function () {
	const l = this.length
	for(let i=0; i<l; this[i++].show());
	return this
}
