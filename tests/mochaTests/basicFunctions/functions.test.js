var expect = require('chai').expect;

var functions = require('./functions');

describe('function test suite', function() {

    before(function() {
        console.log('This is a function test suite');
    });

    it('should remove all vowels from a lowercase string', function() {
        expect(functions.disemvowel('this is lowercase')).to.equal('ths s lwrcs');
    });

    it('should capitalize all letters from a lowercase string', function() {
        expect(functions.allCaps('this will be big')).to.equal('THIS WILL BE BIG');
    });

    it('should remove spaces from a string', function() {
        expect(functions.removeSpace('remove my spaces')).to.equal('removemyspaces');
    });
});