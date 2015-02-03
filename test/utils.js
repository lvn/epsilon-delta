var assert = require('assert'),
  utils = require('../lib/utils');

describe('utils', function () {
  describe('nestedGet', function () {
    it('should properly return a nested property', function () {
      var obj = {
        a: {
          b: {
            c: 'something'
          }
        }
      };
      var key = 'a.b.c';
      var value = 'something';

      assert.equal(utils.nestedGet(obj, key), value);
    });
  });

  describe('compileKey', function () {
    it('should properly compile a key template from context', function () {
      var obj = {
        lang: 'JavaScript',
        framework: 'Angular'
      };
      var template = 'my favorite language is :lang, and my favorite framework is :framework';

      assert.equal(utils.compileKey(template, obj), 
        'my favorite language is ' + obj.lang + ', and my favorite framework is ' + obj.framework);
    });
  });
});
