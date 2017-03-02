var ejs = require('ejs');
var http = require('http');
var fs = require('fs');
var url = require('url');
// 서버 생성
http.createServer(function (request, response) {
  // url 뒤에 있는 디렉토리 / 파일 이름 파싱
  var pathname = url.parse(request.url).pathname;

  console.log("Request for "+ pathname + " received" );

  // 파일이름이 비어있다면 index.html로 설정 이지만 난 EJS로 쓸거지롱
    if(pathname=="/"){
         pathname = "/../myapp/ejs/index.ejs";
     }
     else{
       pathname = "/../myapp/ejs/"+pathname+".ejs";
     }

// 파일 읽기
    fs.readFile(pathname, 'utf8', function (error, data) {
      if (error) {
         console.log(error);
         // 페이지를 찾을 수 없음
         // HTTP Status: 404 : NOT FOUND
         // Content Type: text/plain
         response.writeHead(404, {'Content-Type': 'text/html'});
         response.end();
      }else{
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(ejs.render(data));
      }

    });
}).listen(5000, function () {
    console.log('Server Running...');
});


var io = require('socket.io').listen(3303);
console.log("socket server run!!");

io.sockets.on("connection", function(socket){
  socket.on('chat', function(msg){ // 응답
    console.log('소켓 온!');
      console.log(msg);
    socket.emit('chat',msg); // 요청
    socket.broadcast.emit('chat', msg);
  });
});
