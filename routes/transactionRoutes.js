const express = require("express");
const {
  addTransaction,
  getAllTransaction,
  editTransaction,
  deleteTransaction,
} = require("../controllers/transactionCtrl");

const router = express.Router();

//routes
// add transaction post
router.post("/add-transaction", addTransaction);

// Edit transaction post
router.post("/edit-transaction", editTransaction);

// delete transaction post
router.post("/delete-transaction", deleteTransaction);

//get transactions

router.post("/get-transaction", getAllTransaction);

module.exports = router;
