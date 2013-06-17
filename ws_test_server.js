var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: 8080});
var connected = 0;

wss.on('connection', function(ws) {
	var id = setInterval(function() {
		var currentdate = new Date();
		var time = currentdate.getHours() + ":"  
			+ currentdate.getMinutes() + ":" 
			+ currentdate.getSeconds();
		
		var tojson = {};
		tojson.time = time;
		tojson.locked = 1;
		tojson.ready = 1;
		tojson.latitude = Math.random()*100;
		tojson.longitude = Math.random()*100;
		tojson.acceleration = Math.random()*100;
		tojson.roll = Math.random()*100;
		
		ws.send(JSON.stringify(tojson), function() { /* ignore errors */ });
	}, 100);
	ws.on('message', function(message) {
		console.log('server received: %s', message);
	});
	console.log('opened connection: '+ws.fd);
	connected++;
	ws.send('server connected'+connected);
});

wss.on('close', function() {
	console.log('stopping client interval');
	console.log('closed connection: '+ws.id);
	connected--;
	clearInterval(id);
});
