var URI = require('../src/uri.js');
var should = require('should');

describe('URI', function() {

  it('should parse the query string passed to it', function() {
    var location = URI('?a=b');

    location.should.have.property('query');
    location.query.should.eql({ a: 'b' });
  });

  it('should work with full uris', function() {
    var location = URI('https://user:pw@example.com:80/a/b?c=d#e');

    location.should.have.property('query');
    location.query.should.eql({ c: 'd' });
  });

  describe('query', function() {

    it('should have query method', function() {
      URI.should.have.property('query');
    });

    it('should parse key=val', function() {
      var parsed = URI.query('a=b');
      parsed.should.eql({ a: 'b' })
    });

    it('should parse key', function() {
      var parsed = URI.query('a');
      parsed.should.eql({ a: '' })
    });

    it('should parse key and key=val', function() {
      var parsed = URI.query('a&b=c');
      parsed.should.eql({ a: '', b: 'c' })
    });

    it('should parse key and key=val with ? at front', function() {
      var parsed = URI.query('?a&b=c');
      parsed.should.eql({ a: '', b: 'c' })
    });

    it('should be decode values', function() {
      var parsed = URI.query('?a=%3Fa%3Db');
      parsed.should.eql({ a: '?a=b'});
    });

    it('should be able to disable decoding values', function() {
      var parsed = URI.query('?a=%3Fa%3Db', false);
      parsed.should.eql({ a: '%3Fa%3Db'});
    });

    it('should work with full uris', function() {
      var parsed = URI.query('https://user:pw@example.com:80/a/b?c=d#e');

      parsed.should.eql({ c: 'd' });
    });
    
  });

  describe('extend', function() {
    it('should merge two objects', function() {
      var merged = URI.extend({ a: 'b' }, { c: 'd' });
      merged.should.eql({ a: 'b', c: 'd' })
    });

    it('should deep merge two objects', function() {
      var merged = URI.extend({ a: { b: 'c' }}, { a: { d: 'f' }});
      merged.should.eql({ a: { b: 'c', d: 'f' }});
    });

    it('should be able to disable deep merge', function() {
      var merged = URI.extend(false, { a: { b: 'c' }}, { a: { d: 'f' }});
      merged.should.eql({ a: { d: 'f' }});
    });

    it('should merge more than 2', function() {
      var merged = URI.extend({ a: 'b' }, { c: 'd' }, { e: 'f' });
      merged.should.eql({ a: 'b', c: 'd', e: 'f' });
    });

    it('should deep merge more than 2', function() {
      var merged = URI.extend({ a: { b: 'c' }}, { a: { d: 'e' }}, { a: { f: 'g' }});
      merged.should.eql({ a: { b: 'c', d: 'e', f: 'g' }});
    });

    it('should be able to disable deep merge for more than 2', function() {
       var merged = URI.extend(false, { a: { b: 'c' }}, { a: { d: 'e' }}, { a: { f: 'g' }});
       merged.should.eql({ a: { f: 'g' }}); 
     });
  });

});