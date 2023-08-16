const customerInfo = require("../models/customerInfoSchemaModel");

const updateMiddleWare = async (req, res, next) => {
  try {
    const data = new customerInfo(req.body);
    await data.validate();

    req.req.data = data;
    next();
  } catch (error) {
    if (error.name == "ValidationError") {
      res.status(400).send(error.message);
    } else {
      console.error(" Server Error", error);
      res.status(500).send("Internal Server Error");
    }
  }
};
