const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/NewDb");

// const mongoose=require('mongoose');

const customerDataSchema = new mongoose.Schema(
  {
    name: String,
    address: String,
    contactno: Number,
    GSTNO: String,
    transportationmode: String,
    vehiclenumber: String,
    dateofsupply: Object,
    placeofsupply: String,
    shippedto: String,
    productData: String,
    grandtotal: Number,
  },
  { collection: "customerData" }
);

module.exports = mongoose.model("customerData", customerDataSchema);
