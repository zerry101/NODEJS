const customerInfo = require("../models/customerInfoSchemaModel");

const searchData = async (req, res) => {
  const PAGE_SIZE = 10;
  const currentPage = req.query.page || 1;
  const searchTerm = req.query.search || "";
  console.log(parseInt(currentPage));
  // res.json({ currentPage, searchTerm });
  console.log(searchTerm);

  try {
    const totalCount = await customerInfo
      .countDocuments({
        $or: [
          { name: { $regex: searchTerm, $options: "i" } },
          { address: { $regex: searchTerm, $options: "i" } },
          { transportationmode: { $regex: searchTerm, $options: "i" } },
          { placeofsupply: { $regex: searchTerm, $options: "i" } },
          { shippedto: { $regex: searchTerm, $options: "i" } },
          { vehiclenumber: { $regex: searchTerm, $options: "i" } },
          { contactno: { $regex: searchTerm, $options: "i" } },
          { GSTNO: { $regex: searchTerm, $options: "i" } },
        ],
      })
      .skip((currentPage - 1) * 10)
      .limit(10);

    const totalPages = Math.ceil(totalCount / PAGE_SIZE);

    const data = await customerInfo
      .find({
        $or: [
          { name: { $regex: searchTerm, $options: "i" } },
          { address: { $regex: searchTerm, $options: "i" } },
          { transportationmode: { $regex: searchTerm, $options: "i" } },
          { placeofsupply: { $regex: searchTerm, $options: "i" } },
          { shippedto: { $regex: searchTerm, $options: "i" } },
          { vehiclenumber: { $regex: searchTerm, $options: "i" } },
          { contactno: { $regex: searchTerm, $options: "i" } },
          { GSTNO: { $regex: searchTerm, $options: "i" } },
        ],
        // $or: [
        // ],
      })
      .sort({ date: -1 })
      .skip((currentPage - 1) * PAGE_SIZE)
      .limit(PAGE_SIZE);

    res.status(200).json({
      currentPage,
      totalPages,
      totalCount,
      data,
    });

    console.log(totalCount);
  } catch (error) {
    console.error(error);
  }
};

module.exports = searchData;
