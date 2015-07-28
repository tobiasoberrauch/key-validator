/*global require, module*/
/*!
 * key-validator <https://github.com/tobiasoberrauch/key-validator>
 *
 * Copyright (c) 2015, Tobias Oberrauch.
 * Licensed under the MIT License.
 */

'use strict';

var assert;
var missingKeys;
var config;

if (typeof require === "function") {
  assert = require('chai').assert;
  missingKeys = require('../');
  config = require('../package.json');
} else {
  assert = window.chai.assert;
  missingKeys = window.missingKeys;
  config = window.config;
}

describe('missingKeys', function () {
  it('should return an empty array when no key is missing', function () {
    assert.deepEqual(
      missingKeys(config, ['name', 'description', 'author', 'homepage']),
      []
    );
  });

  it('should return the missing key(s) when one or more key is missing', function () {
    assert.deepEqual(
      missingKeys(config, ['name', 'foo']),
      ['foo']
    );
  });
});

describe('missingKeys.has', function () {
  it('should return false when no key is missing', function () {
    assert.isFalse(
      missingKeys.has(config, ['name', 'description', 'author', 'homepage'])
    );
  });

  it('should return true when one or more key is missing', function () {
    assert.isTrue(
      missingKeys.has(config, ['name', 'foo'])
    );
  });
});

describe('missingKeys.get', function () {
  it('should return an empty array when no key is missing', function () {
    assert.deepEqual(
      missingKeys.get(config, ['name', 'description', 'author', 'homepage']),
      []
    );
  });

  it('should return the missing key(s) when one or more key is missing', function () {
    assert.deepEqual(
      missingKeys.get(config, ['name', 'foo']),
      ['foo']
    );
  });
});
