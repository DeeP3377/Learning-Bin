const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    name : {
        type : String
    },
    email:{
        type:String
        
    },
    mobileno :{
        type:Number
        
    },
    password:{
        type:String
    },
    repassword:{
        type:String

    },
    joinas:{  
        type:String
    },
    date: {
        type: Date,
        default: Date.now
      },
    active : {
        type : Boolean,
        default : true
    }
})

userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        console.log('hello');
        this.password = await bcrypt.hash(this.password,12);
       // this.repassword = await bcrypt.hash(this.repassword,12);
    }
    next();
});


const User = new mongoose.model("Register", userSchema);
module.exports = User;