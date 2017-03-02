var io = require('socket.io').listen(3303);
console.log("socket server run!!");

io.sockets.on("connection", function(socket){
  socket.on('call', function(data){ // 응답
    console.log(data);
    socket.emit('answer','jsp hi!'); // 요청
  });
});
