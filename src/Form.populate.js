HTMLFormElement.prototype.populate = function(o) {
	var elements = this.elements;
	Object.keys(o).forEach(function (key) {
		var e = elements[key];
		if(typeof e!='undefined') {

			// checkbox
			if(!e.type && e.length>0 && o[key].length>0) {
				for(var i=0; i<e.length; i++) {
					if(o[key].indexOf(e[i].value)>-1) {
						e[i].checked = true;
					}
				}
			}
			else if(e.type!='file') {
				e.value = o[key];
			}
		}
	});
	return this;
};
