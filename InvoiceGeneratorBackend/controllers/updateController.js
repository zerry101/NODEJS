const { ObjectId, Long } = require("mongodb");
const customerInfo = require("../models/customerInfoSchemaModel");

const updateCustomer = async (req, res) => {
  try {
    const result = await customerInfo.updateOne(
      { _id: req.params._id },
      {
        $set: req.data,
      }
    );

    if (result.matchedCount === 1 && result.modifiedCount === 0) {
      res.status(400).json({ message: "record has been already updated" });
    } else {
      res.status(201).json({
        message: "The requested record has been updated",
        updatedData: result,
      });
    }
  } catch (error) {
    console.error("Server Error", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = updateCustomer;
