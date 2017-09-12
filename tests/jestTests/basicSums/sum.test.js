var mathFunctions = require('./sum');

test('adds 1 + 2 to equal 3', function() {
    expect(mathFunctions.sum(1, 2)).toBe(3);
});