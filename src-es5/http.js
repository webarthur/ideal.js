"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
          if (xmlhttp.getResponseHeader("Content-Type") === "application/json") {
            response = JSON.parse(xmlhttp.responseText);
          } else {
            response = xmlhttp.responseText;
          }
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
      } else if ((typeof data === "undefined" ? "undefined" : _typeof(data)) == 'object') {
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        var arr = [];
        for (var p in data) {
          if (data.hasOwnProperty(p)) {
            arr.push(encodeURIComponent(p) + "=" + encodeURIComponent(data[p]));
          }
        }postBody = arr.join("&");
      } else {
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
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