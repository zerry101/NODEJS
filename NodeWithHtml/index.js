const express=require('express');
const path=require('path');
const app=express();

const publicPath=path.join(__dirname,'public');

app.use(express.static(publicPath));

app.listen(5000);

app.get('',(_,res)=>{
    res.sendFile(`${publicPath}/home.html`)
})
app.get('/about',(_,res)=>{
    res.send(__dirname);
    res.sendFile(`${publicPath}/about.html`)
})

app.get('*',(_,res)=>{
    res.sendFile(`${publicPath}/nopage.html`);
})



