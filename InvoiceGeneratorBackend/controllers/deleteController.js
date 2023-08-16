const customerInfo = require("../models/customerInfoSchemaModel");

const deleteCustomer = async (req, res) => {
  try {
    const result = await customerInfo.deleteOne({ _id: req.customerid });
    console.log(result);

    if (result.deletedCount === 0) {
      res.status(400).json({ message: "record has not been found" });
    } else {
      res.status(200).json({ message: "record has been deleted successfully" });
    }
  } catch (error) {
    console.error("Server Error", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = deleteCustomer;
