const express=require('express');
const app=express();


const reqFilter=(req,res,next)=>{
    if(req.query.age<=10){
        res.send("you are under age");
    }
    else if(!req.query.age){
        res.send("please provide age");
    }
    else{
        next();
    }
}

// app.use(reqFilter);
// Application level middleware above

app.get('/',(req,res)=>{
    res.send('welcome this is home page');

})

// route  level middleware below

app.get('/about',reqFilter,(req,res)=>{
    res.send('welcome this is about page');

})
app.get('/contactus',(req,res)=>{
    res.send('welcome this is constactus page');

})


app.listen('5000',()=>{

    console.log('listening on 5000');
})