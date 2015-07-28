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
    window.missingKeys = factory();
  }
}(function () {
  /**
   *
   * @param object
   * @param expectedKeys
   * @returns {Array.<T>|*}
   */
  function missingKeys(object, expectedKeys) {
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
   * @param object
   * @param expectedKeys
   * @returns {boolean}
   */
  missingKeys.has = function (object, expectedKeys) {
    return missingKeys(object, expectedKeys).length > 0;
  };

  return missingKeys;
}));