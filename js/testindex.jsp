<script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="https://cdn.socket.io/socket.io-1.3.5.js"></script>

<script>
// localhost로 연결
var socket = io.connect('http://localhost:3303');
socket.emit('call', 'hi nodejs good guys~!'); // 요청
socket.on('answer', function(data){ //응답
  $("#answer").text(data);
});
</script>
