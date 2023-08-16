const { ObjectId } = require("mongodb");
const customerInfo = require("../models/customerInfoSchemaModel");

const deleteMiddleware = async (req, res, next) => {
  const objectid = new ObjectId(req.params._id);
  req.customerid = objectid;
  console.log("midw", objectid);
  next();
};

module.exports = deleteMiddleware;
