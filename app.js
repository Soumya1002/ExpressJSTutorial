const express=require('express');
const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.urlencoded({extended:false}));

app.get('/add-product',(req, res, next)=>{
    console.log("inside add product page");
    res.send('<html><h1>ADD PRODUCT</h1><form action="/store-product" method="POST">Title <input type="text" name="title"/><input type="submit" value="submit"/></form></html>');    
    
})

app.post('/store-product',(req, res, next)=>{
    console.log("inside store product page");
    console.log(req.body)
    res.send('<h1>Product Submitted</h1>');       
})

app.listen(3000);