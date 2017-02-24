'use strict';

/**
 * Class to add dom load functions and execute all node with onload attribute.
 *
 * @author Arthur Araújo
 * @date 01/12/2016
 */
dom.onload = function (func) {
  return window.addEventListener('load', func);
};
dom.onload(function () {
  dom.querySelectorAll('[onload]').forEach(function (node) {
    var self = node;
    eval(self.getAttribute('onload'));
  });
});