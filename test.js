/*global require, module*/
/*!
 * key-validator <https://github.com/tobiasoberrauch/key-validator>
 *
 * Copyright (c) 2015, Tobias Oberrauch.
 * Licensed under the MIT License.
 */

'use strict';

var assert = require('chai').assert;
var missingKeys = require('./');
var config = require('./package.json');

describe('missingKeys', function () {
  it('should return an empty array when no key is missing', function () {
    assert.deepEqual(
      missingKeys(config, ['name', 'version', 'main']),
      []
    );
  });

  it('should return the missing key(s) when one or more key is missing', function () {
    assert.deepEqual(
      missingKeys(config, ['name', 'bin', 'version']),
      ['bin']
    );
  });
});

describe('missingKeys.has', function () {
  it('should return false when no key is missing', function () {
    assert.isFalse(
      missingKeys.has(config, ['name', 'version', 'main'])
    );
  });

  it('should return true when one or more key is missing', function () {
    assert.isTrue(
      missingKeys.has(config, ['name', 'bin', 'version'])
    );
  });
});

describe('missingKeys.get', function () {
  it('should return an empty array when no key is missing', function () {
    assert.deepEqual(
      missingKeys.get(config, ['name', 'version', 'main']),
      []
    );
  });

  it('should return the missing key(s) when one or more key is missing', function () {
    assert.deepEqual(
      missingKeys.get(config, ['name', 'bin', 'version']),
      ['bin']
    );
  });
});
