'use strict';

/**
 * Class to add DOM load functions and execute all node with onload attribute.
 *
 * @author Arthur Araújo
 * @date 01/12/2016
 */
$doc.onload = function (func) {
  return window.addEventListener('load', func);
};
$doc.onload(function () {
  $doc.findAll('[onload]').forEach(function (node) {
    var self = node;
    eval(self.getAttribute('onload'));
  });
});