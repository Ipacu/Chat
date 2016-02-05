var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io').listen(http);

io.set('transports', ['xhr-polling']);
io.set('polling duration', 10);
    //server = require('http').createServer(app),
    //io = require('socket.io').listen(server),
//var http = require('http').Server(app);
//var io = require('socket.io')(http);

app.set('port', (process.env.PORT || 5000));


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});


http.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


//http.listen(3000, function(){
//  console.log('listening on *:3000');
//});
