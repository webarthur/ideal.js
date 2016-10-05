/**
 * @author Chris Baker
 * @source http://stackoverflow.com/questions/18749591/encode-html-entities-in-javascript
 */
String.prototype.toHtmlEntities = function(exp) {
  exp = typeof exp=='undefined'? new RegExp('[\u00A0-\u9999<>\&]', 'gim') : new RegExp('['+exp+']', 'gim');
  return this.replace(exp, function(s) {
      return "&#" + s.charCodeAt(0) + ";";
  });
};
