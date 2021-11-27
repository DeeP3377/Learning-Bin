const dotenv = require('dotenv');  
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const User = require("./models/userSchema");
const getUserData=require('./Service/getUserData');
const subjectRouter = require('./routers/subjectRouter');
const userRouter = require('./routers/userRouter');
const adminRouter = require('./routers/adminRouter')
require("./db/conn");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Enable CORS
app.use(cors());
app.use(subjectRouter);
app.use(userRouter);
app.use(adminRouter);


/*app.get('/studymaterial',(req,res)=>{
    res.json(materialdetail);
});*/
app.listen(8080,()=>{console.log("server start 8080")});