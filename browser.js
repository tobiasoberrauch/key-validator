(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*global require, module*/
/*!
 * key-validator <https://github.com/tobiasoberrauch/key-validator>
 *
 * Copyright (c) 2015, Tobias Oberrauch.
 * Licensed under the MIT License.
 */

'use strict';

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

module.exports = missingKeys;

},{}]},{},[1]);
