const express=require("express");
const app=express();
app.get('/',(req,res)=>{
    res.send("Hello ,this is home");
})

app.listen(3000,()=>{
    console.log("listeining on 3000");
})