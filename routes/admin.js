const express=require('express');
const router=express.Router();
const path=require('path');
const rootDir=require('../utils/path')

router.get('/add-product',(req, res, next)=>{
    console.log("inside add product page");
    res.sendFile(path.join(rootDir,'views','add-product.html'));
    
})

router.post('/add-product',(req, res, next)=>{
    console.log("inside store product page");
    console.log(req.body)
    res.sendFile(path.join(rootDir,'views','add-product.html'));     
})


module.exports=router;