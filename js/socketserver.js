var io = require('socket.io').listen(3303);
console.log("socket server run!!");

io.sockets.on("connection", function(socket){
  socket.on('chat', function(msg){ // 응답
    socket.emit('chat',msg); // 요청
  });
});
