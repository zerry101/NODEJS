const express=require('express');
const multer =require('multer');

const app=express();

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads');
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+'-'+file.originalname);
    }

})


module.exports=multer({storage:storage});

