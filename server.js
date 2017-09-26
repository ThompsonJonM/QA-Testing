var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.status(200).send('ok');
});

var server = app.listen(3000, function() {
    var PORT = server.address().port;
    console.log('Server running. Listening on ' + PORT);
});

module.exports = server;