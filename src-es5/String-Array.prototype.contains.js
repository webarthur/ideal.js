"use strict";

/**
 * Check if a string contains a word.
 * Check if a array contains a item.
 *
 * @author Leandro Christen
 * @date 03/10/2016
 */
String.prototype.contains = Array.prototype.contains = function (v) {
  return this.indexOf(v) !== -1;
};