// const mongoose = require("mongoose");

// const productModel=require('./product');

// const main = async () => {
//   const connect1 = await mongoose.connect("mongodb://127.0.0.1:27017/e-comm");
//   const productSchema = new mongoose.Schema({ name: String,brand:String,price:Number,category:String });

//   const productModel = new mongoose.model("products", productSchema);

// //   Note model is used to connect schema of backend with database  mongodb
//   let data = new productModel({ name: "Zishan",brand:"human" });

//   let result = await data.save();
//   console.log(result);
// };

// main();


const express = require('express');
require('./config');
const Product = require('./product');
const product = require('./product');
const ObjectId = require('mongoose/lib/types/objectid');

const app=express();

app.use(express.json());  


app.post("/create",async(req,res)=>{
  console.log(req.body);

  let data = new Product(req.body);
  let result= await data.save();
  res.send(result);

});

app.get('/list',async(req,res)=>{
const data=await Product.find();

res.send(data);
})

app.delete('/delete/:id',async(req,res)=>{
  console.log(req.params);
const data=await Product.deleteOne(new ObjectId(req.params));
  res.send(data);
})



app.listen(5000);


