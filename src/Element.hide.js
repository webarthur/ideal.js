$E.hide = function () {
	this.style.display = 'none'
	return this
}
$N.hide = function () {
	const l = this.length
	for(let i=0; i<l; this[i++].hide());
	return this
}
