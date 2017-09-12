var expect = require('chai').expect;

var disemvowel = function(str) {
    if (typeof str === 'number') {
        return String(str);
    }

    return str.replace(/[aeiou]/gi, '');
};

describe('function test suite', function() {

    before(function() {
        console.log('This is a function test suite');
    });

    it('should remove all vowels from a lowercase string', function() {
        expect(disemvowel('this is lowercase')).to.equal('ths s lwrcs');
    })
});