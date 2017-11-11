const test = require('tape');

function addOne(num) {
    return num + 1
}

test('could equal 6', function(t) {
    t.equal(addOne(5), 6)
    t.end();
})

test('could equal 19', function(t) {
    t.equal(addOne(18), 19)
    t.end();
})

test.skip('should not equal 6', function(t) {
    t.notEqual(addOne('DennieHaha'), 6)
    t.end();
})

test('should not equal 6', function(t) {
    t.notEqual(addOne([1,4]), 6)
    t.end();
})