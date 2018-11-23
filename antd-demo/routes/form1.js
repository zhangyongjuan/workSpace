var express = require('express');
var path = require('path');
var app = express();
var bodyParse = require('body-parser');
var urlencodeParser = bodyParse.urlencoded({extended:false});
app.use(express.static('../public'));

app.get('/form1.html',(req,res)=>{
   res.sendFile(path.join(__dirname,"../public/views/form1.html"));
})
app.post('/process_post',urlencodeParser,(req,res)=>{
    // req.body里就是请求的数据参数
    let response ={
        'first_name':req.body.first_name,
        'last_name':req.body.last_name
    }
    //在此处可以对请求的数据进行其他的操作
    console.log(response);
    res.end(JSON.stringify(response));
})
var server = app.listen(3001,()=>{
    let host = server.address.host;
    let port = server.address.port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})