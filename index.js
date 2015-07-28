/*global require, module*/
/*!
 * missing-keys <https://github.com/tobiasoberrauch/missing-keys>
 *
 * Copyright (c) 2015, Tobias Oberrauch.
 * Licensed under the MIT License.
 */

'use strict';

(function (factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = factory();
  }
  else if (typeof window === "object") {
    // poly-fill when array.filter doesn't exists
    [].filter || (Array.prototype.filter = function (a, b, c, d, e) {
      c = this;
      d = [];
      for (e in c)~~e + '' == e && e >= 0 && a.call(b, c[e], +e, c) && d.push(c[e]);
      return d
    });
    window.missingKeys = factory();
  }
}(function () {
  /**
   *
   * @param {object} object
   * @param {string|object} expectedKeys
   * @returns {Array.<T>|*}
   */
  function missingKeys(object, expectedKeys) {
    expectedKeys = Object.prototype.toString.call(expectedKeys) === '[object Array]' ? expectedKeys : [expectedKeys];
    var actualKeys = Object.keys(object);
    return expectedKeys.filter(function (expectedKey) {
      return actualKeys.indexOf(expectedKey) === -1;
    });
  }

  /**
   * @type {missingKeys}
   */
  missingKeys.get = missingKeys;

  /**
   *
   * @param {object} object
   * @param {string|object} expectedKeys
   * @returns {boolean}
   */
  missingKeys.has = function (object, expectedKeys) {
    return missingKeys(object, expectedKeys).length > 0;
  };

  return missingKeys;
}));