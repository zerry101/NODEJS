const express=require("express");
const app=express();
app.get('/',(req,res)=>{
    console.log("data send by browser",req.query.name);
    res.send("Hello ,this is "+req.query.name);
})
app.get('/home',(req,res)=>{
    res.send("Hello ,this is home");
})
app.get('/about',(req,res)=>{
    res.send("Hello ,this is about");
})

app.listen(3000,()=>{
    console.log("listeining on 3000");
})