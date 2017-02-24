'use strict';

/**
 * Class to manipulate DOM.
 *
 * @author Arthur Araújo
 * @date 01/12/2016
 */
Element.prototype.react = function (data) {
	var nodeList = this.querySelectorAll('[data-react]');
	if (nodeList) {
		if (this.getAttribute('data-react')) {
			var self = this;
			eval(self.getAttribute('data-react'));
		}
		nodeList.forEach(function (self) {
			eval(self.getAttribute('data-react'));
		});
	}
	return this;
};