describe('small test', function() {
    it('tiny test', function(done) {
        console.log('waiting 1.5 sec');
        setTimeout(function() {
            console.log('waiting over.');
            done();
        }, 1500)
    })
})