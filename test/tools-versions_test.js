/*global describe,it*/
'use strict';
var assert = require('assert'),
  toolsVersions = require('../lib/tools-versions.js');

describe('tools-versions node module.', function() {
  it('must be awesome', function() {
    assert( toolsVersions.awesome(), 'awesome');
  });
});
