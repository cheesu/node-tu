var express = require('express'); // 익스프레스 모듈 추출
var app = express();
var router = require('./router/main')(app); // 라우터 불러오기

app.set('views', __dirname + '/views'); // 서버가 읽을 수 있도록 HTML 위치 지정
 // HTML렌더링 할때 EJS 엔진을 사용하도록 설정
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000");
});
app.use(express.static('public'));
