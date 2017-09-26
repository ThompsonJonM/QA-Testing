var expect = require('chai').expect;
var request = require('supertest');

describe('listen', function() {
    var server;

    beforeEach(function() {
        server = require('./../../server');
    });

    afterEach(function() {
        server.close();
    });

    it('responds to /', function testSlash(done) {
        request(server)
            .get('/')
            .expect(200, done);
    });

    it('404 for everything else', function testPath(done) {
        request(server)
            .get('/breh')
            .expect(404, done);
    });
});