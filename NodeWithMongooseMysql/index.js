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

const express = require("express");
require("./config");
const Product = require("./product");
const product = require("./product");
const upload = require("./upload");
const path = require("path");

const EventEmitter = require("events");
const event = new EventEmitter();
const ObjectId = require("mongoose/lib/types/objectid");

const app = express();

app.use(express.json());

let count = 0;

event.on("count API", () => {
  count++;
  console.log("event called", count);
});

app.get("/", (req, res) => {
  console.log("api called");
  res.send("api called");
  event.emit("count API");
});

app.post("/create", async (req, res) => {
  console.log(req.body);
  let data = new Product(req.body);

  let result = await data.save();
  res.send(result);
});

app.get("/list", async (req, res) => {
  const data = await Product.find();

  res.send(data);
});

app.delete("/delete/:id", async (req, res) => {
  console.log(req.params);
  const data = await Product.deleteOne(new ObjectId(req.params));
  res.send(data);
});

app.put("/update/:_id", async (req, res) => {
  console.log(req.params);
  const data = await Product.updateOne(req.params, {
    $set: req.body,
  });
  res.send(data);
});

app.get("/find/:key", async (req, res) => {
  const keyword = req.params.key;
  const numericKeyword = isNaN(keyword) ? keyword : Number(keyword);

  const data = await Product.find({
    $or: [
      { name: { $regex: keyword } },
      { brand: { $regex: keyword } },
      { category: { $regex: keyword } },
      { price: numericKeyword },
    ],
  });

  console.log(data);

  res.send(data);
  // res.send(data);
});

app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).send("File has been uploaded successfully");
});

app.get("/getImage", (req, res) => {
  // const path = __dirname;
  console.log(path);
  const filePath = path.join(
    __dirname,
    "/uploads/1691819705406-Screenshot (1).png"
  );
  res.sendFile(filePath);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});

// app.listen(5000);
