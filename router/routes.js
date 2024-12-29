const express=require('express');
const sequelize=require('../Config/config.js');
const {user}=require('../models/index.js');

router.post('/user',async(req,res)=>{
    try{
    const{name,age,contact}=req.body;
    const user=await user.Create({name,age,contact});
    res.status(201).json(user);
    }
    catch{
        res.status(500).json('error message');
    }

});
router.get('/users',async(req,res)=>{
    try{
        const user=await user.findAll();
        res.status(200).json(users);
    }
    catch{
        res.status(500).json('error messaged');
    }
});
module.export=router;