const express = require("express");
const router = express.Router();

const createCustomer = require("../controllers/createController");
const updateCustomer = require("../controllers/updateController");
const deleteCustomer = require("../controllers/deleteController");

const createMiddleware = require("../middlewares/createMiddleware");
const updateMiddleware = require("../middlewares/updateMiddleware");
const deleteMiddleware = require("../middlewares/deleteMiddleware");
// const createController = require("../controllers/createController");
// const updateController = require("../controllers/updateController");

router.post("/create", createMiddleware, createCustomer);
router.put("/update/:_id", updateMiddleware, updateCustomer);
router.delete("/delete/:_id", deleteMiddleware, deleteCustomer);

module.exports = router;
