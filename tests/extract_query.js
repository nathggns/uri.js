var URI = require('../src/uri.js');
var should = require('should');

describe('URI', function() {

  describe('extract_query', function() {

    it('should work with full urls', function() {
      var query = URI.extract_query('https://user:pw@example.com:80/a/b?c=d&e=f&g#e');

      query.should.eql('?c=d&e=f&g');
    });
  });

});