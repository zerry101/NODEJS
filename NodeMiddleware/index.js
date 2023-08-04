const express=require('express');
const app=express();
const reqFilter=require('./middleware');
const route=express.Router();

// app.use(reqFilter);
// Application level middleware above middleware that applies globally


app.get('/',(req,res)=>{
    res.send('welcome this is home page');

})

route.use(reqFilter);

// route  level middleware below 
route.get('/about',reqFilter,(req,res)=>{
    res.send('welcome this is about page');

})
route.get('/contactus',(req,res)=>{
    res.send('welcome this is constactus page');

})

app.use('/',route)

app.listen('5000',()=>{

    console.log('listening on 5000');
})