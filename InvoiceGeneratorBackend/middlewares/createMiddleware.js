const customerInfo = require("../models/customerInfoSchemaModel");

const createMiddleware = async (req, res, next) => {
  try {
    const data = new customerInfo(req.body);
    await data.validate();
    req.data = data;
    next();
  } catch (error) {
    if (error.name == "ValidationError") {
      res.status(400).send(error.message);
    } else {
      console.error("Server Error", error);
      res.status(500).send("Iternal Server Error");
    }
  }
};

module.exports = createMiddleware;
