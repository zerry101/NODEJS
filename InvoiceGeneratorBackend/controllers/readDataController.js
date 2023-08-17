const customerInfo = require("../models/customerInfoSchemaModel");

const readData = async (req, res) => {
  const PAGE_SIZE = 10;
  const currntPage = req.query.page || 1;

  const totalCount = await customerInfo.countDocuments();

  const data = await customerInfo
    .find()
    .limit(PAGE_SIZE)
    .sort({ data: -1 })
    .skip(PAGE_SIZE * (currntPage - 1));

  console.log(totalCount);

  res.status(200).json({ currntPage, totalCount, data });
};

module.exports = readData;
