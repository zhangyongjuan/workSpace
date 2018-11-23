var express = require('express');
var app = express();
//加载静态文件
app.use(express.static('../public'));

//主页输出"hello world"
app.get('/',(req,res)=>{
    console.log('主页GET请求！')
    res.end('hello world');
})
app.post('/',(req,res)=>{
    console.log('主页post 请求');
    res.end('hello post');
})
app.get('/del_user',(req,res)=>{
    console.log("/del_user 响应 DELETE 请求");
    res.send('删除页面');
})
app.get('/list_user',(req,res)=>{
    console.log("/list_user GET 请求");
    res.send('用户列表页面');
})

var server = app.listen(3000, function () {

    let host = server.address().address
    let port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})