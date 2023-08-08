const express=require('express');
const dbcConnect= require('./mongodb');
const mongodb=require('mongodb');

const app=express();

app.use(express.json());

app.get('/',async(req,res)=>{

    let data=await dbcConnect();
    const fetchedData=await data.find().toArray();
    res.send(fetchedData);
})


app.post('/',async(req,res)=>{
    console.log(req.body);
    
    const db=await dbcConnect();
    insertResult=await db.insertOne(req.body);
    
    res.send(insertResult)

})

app.put('/:name',async(req,res)=>{

    const db=await dbcConnect();
    console.log(req.body);
    updateResult=await db.updateOne({name:req.params.name},{$set:req.body})
    console.log(updateResult);
    res.send(updateResult);
})

app.delete('/:id',async(req,res)=>{
    const db=await dbcConnect();
    console.log(req.params.id);
    deleteResult=await db.deleteOne({_id:new mongodb.ObjectId(req.params.id)})

    res.send(deleteResult);
})

app.listen(5000,()=>{
    console.log('listeining on port 5000');
})



