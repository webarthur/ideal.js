'use strict';

/**
 * Class to manipulate DOM.
 *
 * @author Arthur Araújo
 * @date 01/12/2016
 */
$E.react = function (data) {
	var ls = this.findAll('[data-react]');
	if (ls) {
		if (this.getAttribute('data-react')) {
			var self = this;
			eval(self.getAttribute('data-react'));
		}
		ls.forEach(function (self) {
			return eval(self.getAttribute('data-react'));
		});
	}
	return this;
};