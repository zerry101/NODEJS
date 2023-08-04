module.exports =(req,res,next)=>{
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
