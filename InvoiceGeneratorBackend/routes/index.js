const express = require("express");
const router = express.Router();

const createCustomer = require("../controllers/createController");
const updateCustomer = require("../controllers/updateController");
const deleteCustomer = require("../controllers/deleteController");
const searchData = require("../controllers/searchController");
const readData = require("../controllers/readDataController");

const createMiddleware = require("../middlewares/createMiddleware");
const updateMiddleware = require("../middlewares/updateMiddleware");
const deleteMiddleware = require("../middlewares/deleteMiddleware");
// const createController = require("../controllers/createController");
// const updateController = require("../controllers/updateController");

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

router.post("/create", createMiddleware, createCustomer);
router.put("/update/:_id", updateMiddleware, updateCustomer);
router.delete("/delete/:_id", deleteMiddleware, deleteCustomer);
router.get("/searchData", searchData);
router.get("/getData", readData);
module.exports = router;
