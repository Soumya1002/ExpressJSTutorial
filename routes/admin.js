const express=require('express');

const router=express.Router();

router.get('/add-product',(req, res, next)=>{
    console.log("inside add product page");
    res.send('<html><h1>ADD PRODUCT</h1><form action="/store-product" method="POST">Title <input type="text" name="title"/><input type="submit" value="submit"/></form></html>');    
    
})

router.post('/store-product',(req, res, next)=>{
    console.log("inside store product page");
    console.log(req.body)
    res.send('<h1>Product Submitted</h1>');       
})

module.exports=router;