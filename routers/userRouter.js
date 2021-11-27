const express = require("express");
const router = new express.Router();
const User = require("../models/userSchema");
//const getUserData=require('../Service/getUserData');
const bcrypt = require('bcrypt');


router.get('/',(req,res)=>{
    res.send('<h1>server.js file</h1>')
});
router.get('/about',(req,res)=>{
    res.send('<h1>about server.js file</h1>')
});
router.get('/faq',(req,res)=>{
    res.send('<h1>faq server.js file</h1>')
});
router.post('/login',(req,res)=>{
    const {email , password} = req.body;
    console.log(req.body)
    User.findOne({email:email},(err , user)=>{
        if(user){
            const isMatch = bcrypt.compare(password,user.password)
            if(isMatch){
                res.send({message:'Login Succrssfull' , user:user })
            }
            else{
                res.send({message: "Password did not match"})
            }
        }
        else{
            res.send({message:"User not Registered"})
        }
    })
});
router.post('/signup',(req,res)=>{
    const { name , email ,mobileno , password ,  joinas } = req.body;
    User.findOne({email: email},(err,user) =>{
        if(user){
            res.send({message: "User already registerd"})
        }
        else{
            const user = new User ({
                name,
                email,
                mobileno,
                password,
                joinas
            })
            //console.log(user)
             
            user.save(err=>{
                console.log(user)
                if(err){
                   console.log(err); 
                    res.send({ message:"not Successfully Registerd"})
                }
                else{
                    res.send({message:"Successfully Registerd"})
                }
            })
        }
    })
          
});
module.exports = router;