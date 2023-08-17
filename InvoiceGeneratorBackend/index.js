// require("./config");
// const customerInfo = require("./models/customerInfoSchemaModel");
// const mongoose = require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/NewDb");
// const express = require("express");
// const ObjectId = require("mongoose/lib/types/objectid");

// app.post("/create", async (req, res) => {
//   console.log(req.body);
//   const data = new customerInfo(req.body);

//   try {
//     await data.validate();
//     const result = await data.save();
//     res.status(201).json(result);
//   } catch (error) {
//     if (error.name == "ValidationError") {
//       res.status(400).send(error.message);
//     } else {
//       console.error("Server Error", error);
//       res.status(500).send("Internal Server Error");
//     }
//   }
// });

// app.put("/update/:_id", async (req, res) => {
//   const data = new customerInfo(req.body);
//   try {
//     await data.validate();
//     const result = await customerInfo.updateOne(req.params, {
//       $set: req.body,
//     });
//     res.status(201).json({
//       message: "The requested record has been updated",
//       updatedData: result,
//     });
//   } catch (error) {
//     if (error.name == "ValidationError") {
//       res.status(400).send(error.message);
//     } else {
//       console.error("Server Error", error);
//       res.status(500).send("Internal Server Error");
//     }
//   }
// });

// app.delete("/delet/:_id", async (req, res) => {
//   const customerid = new ObjectId(req.params._id);
// });

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("./config/config");
const routes = require("./routes");
const customerInfo = require("./models/customerInfoSchemaModel");

app.use(express.json());

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

app.use("/", routes);
