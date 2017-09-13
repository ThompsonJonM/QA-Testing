describe('Inner Suite 1', function() {

    before(function() {

    });

    after(function() {

    });

    beforeEach(function() {

    });

    afterEach(function() {

    });

    it('test-1', function() {

        var promise;

        promise = new Promise(function(resolve, reject) {
            setTimeout(function() {

                console.log('timeout!');

            }, 3000);

            resolve();
        });
            
        return promise;
    });

    it('test-2', function(done) {
        console.log('waiting 3 seconds');
        setTimeout(function() {
            console.log('waiting over.');
            done();
        }, 3000)

        // done();
    })

    it('test-3', function() {

    });

});