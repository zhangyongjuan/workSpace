const express = require('express');
const next = require('next');

// const port = parseInt(process.env.PORT,10 || 3000);
const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare().then(()=>{
    const server = express();
    // server.get('/app',(req,res)=>{
    //     app.render(req,res,'/_app',req.query);
    // })
    // server.get('/document',(req,res)=>{
    //     app.render(req,res,'/_document',req.query);
    // })
    server.get('/title',(req,res)=>{
        app.render(req,res,'/title',req.query);
    })
    server.get('/about',(req,res)=>{
        app.render(req,res,'/about',req.query);
    })
    server.get('/blockInfo',(req,res)=>{
        app.render(req,res,'/blockInfo',req.query);
    })
    server.get('*',(req,res)=>{
        handle(req,res);
    })
    server.listen(port,err=>{
        if(err) throw err;
        console.log(`> Ready on http://localhost:${port}`)
    })
})