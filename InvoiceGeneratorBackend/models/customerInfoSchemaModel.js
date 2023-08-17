const mongoose = require("mongoose");

// const mongoose=require('mongoose');

const customerDataSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    contactno: { type: String, required: true },
    // GSTNO: { type: String, required: true },
    transportationmode: { type: String, required: true },
    vehiclenumber: { type: String, required: true },
    dateofsupply: { type: String, required: true },
    placeofsupply: { type: String, required: true },
    shippedto: { type: String, required: true },
    productData: { type: String, required: true },
    grandtotal: { type: Number, required: true },
  },
  { collection: "customerData" }
);

module.exports = mongoose.model("customerData", customerDataSchema);
