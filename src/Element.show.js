$E.show = function () {
	this.style.display = ''
	this.removeAttribute('hidden')
	return this
}
$N.show = function () {
	const l = this.length
	for(let i=0; i<l; this[i++].show());
	return this
}
