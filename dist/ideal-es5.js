'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var $e = function $e(e) {
  var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return p.getElementById(e) || {};
};
var $all = function $all(t) {
  var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.body;
  return p.getElementsByTagName(t) || {};
};
var $find = function $find(q) {
  var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return p.querySelector(q) || {};
};
var $findAll = function $findAll(q) {
  var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return p.querySelectorAll(q) || [];
};
var $ = typeof $ == 'undefined' ? $findAll : $;

var $E = Element.prototype;
$E.get = function (id) {
  return $e(id, this);
};
$E.all = function (t) {
  return $all(t, this);
};
$E.find = function (q) {
  return $find(q, this);
};
$E.findAll = function (q) {
  return $findAll(q, this);
};

var $N = NodeList.prototype;
var $H = HTMLCollection;
var $A = Array.prototype;
$N.forEach = $H.forEach = $A.forEach;
$N.each = function (func) {
  var l = this.length;
  for (var i = 0; i < l; i++) {
    func.apply(this[i], i, this[i]);
  }
};

var $doc = document.childNodes[1];
var $body = document.body;
var $head = $doc.find('head');

var $F = HTMLFormElement.prototype;
var $L = window.location;
var $S = String.prototype;

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

/**
 * ...
 *
 * @author ???
 * @date ???
 */
var http = function () {
  var ajax = function ajax(method, url, headers, data, success, error) {
    var xmlhttp = new XMLHttpRequest();
    var postBody;

    xmlhttp.onreadystatechange = function () {
      var response = false;
      if (xmlhttp.readyState == 4) {
        if (xmlhttp.responseText) {
          var is_json = xmlhttp.getResponseHeader('Content-Type') === 'application/json';
          response = is_json ? JSON.parse(xmlhttp.responseText) : xmlhttp.responseText;
        }
        if (xmlhttp.status == 200) {
          success && success.call(null, response);
        } else {
          error && error.call(null, response);
        }
      }
    };

    xmlhttp.open(method, url, true);

    if (data) {
      if (data.constructor === FormData) {
        postBody = data;
      } else if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) == 'object') {
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        var arr = [];
        for (var p in data) {
          if (data.hasOwnProperty(p)) {
            arr.push(encodeURIComponent(p) + "=" + encodeURIComponent(data[p]));
          }
        }postBody = arr.join("&");
      } else {
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded charset=UTF-8");
        postBody = data;
      }
    }

    if (headers) {
      for (var header in headers) {
        if (headers.hasOwnProperty(header)) {
          var headerValue = headers[header];
          xmlhttp.setRequestHeader(header, headerValue);
        }
      }
    }

    xmlhttp.send(postBody);
  };

  return {
    ajax: ajax,
    urlPrefix: '',

    get: function get(url, success, error) {
      ajax("GET", this.urlPrefix + url, false, false, success, error);
    },

    post: function post(url, data, success, error) {
      ajax("POST", this.urlPrefix + url, false, data, success, error);
    },

    put: function put(url, data, success, error) {
      ajax("PUT", this.urlPrefix + url, false, data, success, error);
    },

    delete: function _delete(url, success, error) {
      ajax("DELETE", this.urlPrefix + url, false, false, success, error);
    },

    redirect: function redirect(url) {
      location.href = url;
    },

    hash: function hash(_hash) {
      // location.hash.substring(1) by Mark Notton (http://stackoverflow.com/questions/298503/how-can-you-check-for-a-hash-in-a-url-using-javascript)
      return typeof _hash !== 'undefined' ? location.hash = _hash : location.hash.substring(1); // by Mark Notton
    }
  };
}();

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

var cookies = {
  set: function set(name, value, days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      var expires = '; expires=' + date.toGMTString();
    } else var expires = '';
    document.cookie = name + '=' + value + expires + '; path=/';
  },
  get: function get(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) === 0) {
        return c.substring(nameEQ.length, c.length);
      }
    }
    return null;
  },
  remove: function remove(name) {
    createCookie(name, '', -1);
  }
};

$L.getQueryParam = function (name, query) {

  if (!query) {
    query = $L.search;
  }

  var l = query.length;
  var n = ''; // name
  var v = ''; // value
  var t = false;

  for (var _i = 0; _i < l; _i++) {
    var c = query[_i];

    if (c === '=') {
      t = true;
    } else if (c === '&' || _i === l - 1) {

      if (n == name) {
        if (_i === l - 1) {
          v += c === '+' ? ' ' : c;
        }
        return decodeURIComponent(v);
      }

      t = false;
      n = '';
      v = '';
    } else if (_i > 0 || c !== '?') {
      if (t) {
        v += c === '+' ? ' ' : c;
      } else {
        n += c;
      }
    }
  }
};

$L.getQueryParams = function (query) {

  if (!query) {
    query = $L.search;
  }

  var l = query.length;
  var q = {}; // query
  var n = ''; // name
  var v = ''; // value
  var t = false;

  for (var _i2 = 0; _i2 < l; _i2++) {
    var c = query[_i2];

    if (c === '=') {
      t = true;
    } else if (c === '&' || _i2 === l - 1) {
      t = false;
      if (_i2 === l - 1) {
        v += c === '+' ? ' ' : c;
      }
      q[n] = decodeURIComponent(v);
      n = '';
      v = '';
    } else if (_i2 > 0 || c !== '?') {
      if (t) {
        v += c === '+' ? ' ' : c;
      } else {
        n += c;
      }
    }
  }
  return q;
};

Object.assign || Object.defineProperty(Object, 'assign', {
  enumerable: false,
  configurable: true,
  writable: true,
  value: function value(target) {
    'use strict';

    if (target === undefined || target === null) {
      throw new TypeError('Cannot convert first argument to object');
    }

    var to = Object(target);
    for (var _i3 = 1; _i3 < arguments.length; _i3++) {
      var nextSource = arguments[_i3];
      if (nextSource === undefined || nextSource === null) {
        continue;
      }
      nextSource = Object(nextSource);

      var keysArray = Object.keys(Object(nextSource));
      for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
        var nextKey = keysArray[nextIndex];
        var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        if (desc !== undefined && desc.enumerable) {
          to[nextKey] = nextSource[nextKey];
        }
      }
    }
    return to;
  }
});

Date.isLeapYear = function (y) {
  return y % 4 == 0 && (y % 100 != 0 || y % 400 == 0);
};

Date.isValid = function (s) {
  var l = s.length;
  var j = 0;
  var dt = { 0: '', 1: '', 2: '' };

  // days in month
  var n = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // split the date
  for (var i = 0; i < l; i++) {
    var c = s[i];
    if (c !== '/') {
      dt[j] += c;
    } else {
      j++;
    }
  }

  // convert string to numbers
  var d = +dt[0];
  var m = +dt[1];
  var y = +dt[2];

  // update leap year days
  n[2] += +(y % 4 == 0 && (y % 100 != 0 || y % 400 == 0));

  // date rules:
  // month 1-12 and day>0
  if (m < 1 || m > 12 || d < 1) {
    return false;
  }
  // validate days in month
  else if (d > n[m]) {
      return false;
    }

  // date is valid!
  return true;
};

$E.after = function (html) {
  this.insertAdjacentHTML('afterend', html);
  return this;
};

$E.append = function (html) {
  this.insertAdjacentHTML('beforeend', html);
  return this;
};

$E.before = function (html) {
  this.insertAdjacentHTML('beforebegin', html);
  return this;
};

$E.data = function (opt, v) {
  if (typeof v == 'undefined') return this.getAttribute('data-' + opt);

  this.setAttribute('data-' + opt, v);

  return this;
};

$E.disable = function () {
  this.setAttribute('disabled', true);
  return this;
};

$E.enable = function () {
  this.removeAttribute('disabled');
  return this;
};

$E.hide = function () {
  this.style.display = 'none';
  return this;
};
$N.hide = function () {
  var l = this.length;
  for (var i = 0; i < l; this[i++].hide()) {}
};

$E.on = function (evt, fn) {
  if (this.addEventListener) this.addEventListener(evt, fn, false);else if (this.attachEvent) this.attachEvent('on' + evt, fn);
  return this;
};

$E.preppend = function (html) {
  this.insertAdjacentHTML('afterbegin', html);
  return this;
};

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

$E.remove = function () {
  this.parentElement.removeChild(this);
};
$N.remove = $H.remove = function () {
  for (var i = this.length - 1; i >= 0; i--) {
    if (this[i] && this[i].parentElement) {
      this[i].parentElement.removeChild(this[i]);
    }
  }
};

// http://stackoverflow.com/questions/3387427/remove-element-by-id
$E.unbind = function (type, handle) {
  document.removeEventListener ? this.removeEventListener(type, handle, false) : this.detachEvent("on" + type, handle);
};

$F.populate = function (o) {
  var lst = this.elements;
  Object.keys(o).forEach(function (key) {
    var e = lst[key];
    if (typeof e != 'undefined') {

      // checkbox
      if (!e.type && e.length > 0 && o[key].length > 0) {
        for (var i = 0; i < e.length; i++) {
          if (o[key].indexOf(e[i].value) > -1) {
            e[i].checked = true;
          }
        }
      } else if (e.type != 'file') {
        e.value = o[key];
      }
    }
  });
  return this;
};

$F.serialize = function () {
  var form = this,
      s = [];
  for (i = 0; i < form.elements.length; i++) {
    field = form.elements[i];
    if (field.name && !field.disabled && field.type != 'file' && field.type != 'reset' && field.type != 'submit' && field.type != 'button') {
      if (field.type == 'select-multiple') {
        for (j = form.elements[i].options.length - 1; j >= 0; j--) {
          if (field.options[j].selected) s[s.length] = encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[j].value);
        }
      } else if (field.type != 'checkbox' && field.type != 'radio') {
        s[s.length] = encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value);
      } else if (field.type == 'checkbox' && field.checked) {
        s[s.length] = encodeURIComponent(field.name) + "[]=" + encodeURIComponent(field.value);
      }
    }
  }
  return s.join('&').replace(/%20/g, '+');
};

$S.capitalize = function () {
  return this[0].toUpperCase() + this.slice(1);
};

// http://stackoverflow.com/questions/7394748/whats-the-right-way-to-decode-a-string-that-has-special-html-entities-in-it
$S.decodeEntities = function () {
  return this.replace(/&#([0-9]{1,3});/gi, function (match, numStr) {
    var num = parseInt(numStr, 10); // read num as normal number
    return String.fromCharCode(num);
  });
};

$S.decodeHTMLEntities = function () {
  var el = document.createElement('div');
  var str = this;

  el.innerHTML = str;
  str = el.textContent;
  el.remove();

  return str;
};

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

$S.stripTags = function (allowed) {
  allowed = (((allowed || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('');

  var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
  var commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;

  return this.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
    return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
  });
};