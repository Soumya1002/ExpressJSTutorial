

const http=require('http');
const express=require('express');
const app=express();
app.use((req, res, next)=>{
    console.log("first");
    next();
    
})
app.use((req, res, next)=>{
    console.log("second");
    next();
    
})
app.use(()=>{
    console.log("third");
})

const server=http.createServer(app);
server.listen(3000);