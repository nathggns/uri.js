var URI = require('../src/uri.js');
var should = require('should');

describe('URI', function() {

  describe('compile', function() {

    it('should work with single item objects', function() {
      URI.compile({ a: 'b' }).should.eql('?a=b');
    });

    it('should work with multiple item objects', function() {
      URI.compile({
        a: 'b',
        c: 'd'
      }).should.eql('?a=b&c=d');
    });

  });

});