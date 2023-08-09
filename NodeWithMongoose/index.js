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
const product = require('./product');

const app=express();

app.use(express.json());  

app.post("/create",(req,res)=>{
  console.log(req.body);
  
  res.send("Done");

});

app.listen(5000);


