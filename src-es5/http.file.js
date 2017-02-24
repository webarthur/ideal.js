'use strict';

http.file = function (opt) {

	opt = opt || {};
	opt = Object.assign({
		data: {},
		maxSize: -1,
		extension: null,
		mimeType: null,
		beforeSend: null,
		success: function success(data, textStatus, jqXHR) {
			console.log(data, textStatus, jqXHR);
		},
		error: function error(jqXHR, textStatus, errorThrown) {
			console.log(jqXHR, textStatus, errorThrown);
		}
	}, opt);

	var el = opt.selector;

	// MAX SIZE VALIDATION
	if (opt.maxSize > 0 && el.files[0].size > opt.maxSize) {

		var fSExt = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
		var fSExtIndex = 0;
		var maxSize = '';

		while (el.files[0].size > 900) {
			el.files[0].size /= 1024;
			fSExtIndex++;
		}

		maxSize = Math.round(el.files[0].size * 100) / 100 + ' ' + fSExt[i];

		return opt.error(null, 'Allowed file size exceeded. (Max. ' + maxSize + ')', null);
	}

	// FILE EXTENSION VALIDATION
	if (opt.extension != null && !new RegExp('(' + opt.extension + ')$').test(el.files[0].name.split('.').pop().toLowerCase())) {
		return opt.error(null, "Only formats are allowed: " + opt.extension.split('|').join(', '), null);
	}

	// MIME TYPE VALIDATION
	if (opt.mimeType != null && !new RegExp('(' + opt.mimeType + ')$').test(el.files[0].name.split('.').pop().toLowerCase())) {
		return opt.error(null, "Only formats are allowed: " + opt.mimeType.split('|').join(', '), null);
	}

	// FORM DATA + FILE INPUT
	var fd = new FormData();
	fd.append(el.name, el.files[0]);

	// PREPARE DATA BEFORE AJAX
	var data = typeof opt.data == 'function' ? opt.data(opt) : opt.data;

	// POST DATA
	// for(attr in data) {
	// 	fd.append( attr, data[attr] );
	// }

	return http.ajax("POST", this.urlPrefix + opt.url, false, fd, opt.success, opt.error);
};