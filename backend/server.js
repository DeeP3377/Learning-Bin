const express = require('express');
const materialdetail = require('./data/MaterialDetail');
const app = express();
app.get('/',(req,res)=>{
    res.send('<h1>server.js file</h1>')
});
app.get('/about',(req,res)=>{
    res.send('<h1>about server.js file</h1>')
});
app.get('/faq',(req,res)=>{
    res.send('<h1>faq server.js file</h1>')
});
app.get('/login',(req,res)=>{
    res.send('<h1>login server.js file</h1>')
});
app.get('/signup',(req,res)=>{
    res.send('<h1>sign upserver.js file</h1>')
});
app.get('/studymaterial',(req,res)=>{
    res.json(materialdetail);
});
app.listen(8080,()=>{console.log("server start")});