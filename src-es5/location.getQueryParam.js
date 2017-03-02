'use strict';

$L.getQueryParam = function (name, query) {

  if (!query) {
    query = $L.search;
  }

  var l = query.length;
  var n = ''; // name
  var v = ''; // value
  var t = false;

  for (var i = 0; i < l; i++) {
    var c = query[i];

    if (c === '=') {
      t = true;
    } else if (c === '&' || i === l - 1) {

      if (n == name) {
        if (i === l - 1) {
          v += c === '+' ? ' ' : c;
        }
        return decodeURIComponent(v);
      }

      t = false;
      n = '';
      v = '';
    } else if (i > 0 || c !== '?') {
      if (t) {
        v += c === '+' ? ' ' : c;
      } else {
        n += c;
      }
    }
  }
};