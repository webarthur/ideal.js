'use strict';

/**
 * @author Chris Baker
 * @source http://stackoverflow.com/questions/18749591/encode-html-entities-in-javascript
 */
$S.toHtmlEntities = function (exp) {
  exp = typeof exp == 'undefined' ? new RegExp('[\xA0-\u9999<>&]', 'gim') : new RegExp('[' + exp + ']', 'gim');
  return this.replace(exp, function (s) {
    return "&#" + s[0] + ";";
  });
};