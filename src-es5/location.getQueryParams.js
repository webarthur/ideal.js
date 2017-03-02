'use strict';

$L.getQueryParams = function (query) {

  if (!query) {
    query = $L.search;
  }

  var l = query.length;
  var q = {}; // query
  var n = ''; // name
  var v = ''; // value
  var t = false;

  for (var i = 0; i < l; i++) {
    var c = query[i];

    if (c === '=') {
      t = true;
    } else if (c === '&' || i === l - 1) {
      t = false;
      if (i === l - 1) {
        v += c === '+' ? ' ' : c;
      }
      q[n] = decodeURIComponent(v);
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
  return q;
};