'use strict';

/**
 * Class to manipulate DOM.
 *
 * @author Arthur Araújo
 * @date 01/12/2016
 */
var dom = document.childNodes[1];
dom.body = dom.querySelector('body');
dom.head = dom.querySelector('head');
dom.element = function (id) {
  return document.getElementById(id);
};