const express = require("express");
const router = new express.Router();
const getUserData=require('../Service/getUserData');

router.get('/admin',getUserData);

router.delete('/delete/:id' , async(req,res)=>{
    const id=req.params.id;
    console.log(id);
    await User.findByIdAndDelete(id).exec();
    res.send("deleted")
});
router.put('/changestatus/:id' , async(req,res)=>{
    const id =req.params.id;
    //console.log("id",req.params.id);
    const udata = await User.findById(id)
    if(udata.active === true)
    {
        const st = false;
        await User.findByIdAndUpdate(id , {active : st} , res.send({ message:"Update Status"}))
    }
    else{
        const st = true;
        await User.findByIdAndUpdate(id , {active : st} , res.send({ message:"Update Status"}))   
    }
   
    console.log(udata.active)
    res.send({ message:"change" })
    
});
router.put('/update/:id',async (req,res)=>{
    const id=req.params.id;
    // console.log("id",req.params.id);
    const updateData = req.body;
    await User.findByIdAndUpdate(id , updateData , res.send({ message:"Update Successfully"}))
    res.send("ok");
});
module.exports = router;