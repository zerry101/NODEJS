const customerInfo = require("../models/customerInfoSchemaModel");

const updateController = async (req, res) => {
  const result = new customerInfo.updateOne(req.parmas, { $set: req.data });

  res.status(201).json({
    message: "The requested record has been updated",
    updatedData: result,
  });
};
