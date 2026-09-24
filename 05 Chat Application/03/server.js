var app  = require('express')();
var http = require('http').Server(app);
var io   = require('socket.io')(http);

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
	// Detected New Message
	socket.on('newMessage', function(msg) {
		io.emit('newMessage', msg);
		console.log('New Chat: ' + msg);
	});

	// User Disconnected
	socket.on('disconnect', function(msg) {
		console.log('user disconnected');
	});

});

http.listen(5000, function() {
	console.log('listening on port 5000.....');
});

