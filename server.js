var app = require('./server/app');
var http = require('http');

app.set('port', process.env.PORT || 3000);

var server = http.createServer(app);

server.listen(app.get('port'));

server.on('error', (err) => {
    console.log(err);
});

server.on('listening', () => {
    console.log('App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
});