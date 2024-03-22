const Transaction = require("../model/transactions");

// @desc   GET all transactions
// @route  GET /api/v1/transactions
// @access public
module.exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

// @desc   Add transaction
// @route  POST /api/v1/transactions
// @access public
module.exports.addTransaction = async (req, res, next) => {
  try {
    const { id, text, amount } = req.body; // Assuming request body contains id, text, and amount

    // Create a new transaction object
    const newTransaction = new Transaction({
      id,
      text,
      amount,
    });

    // Save the new transaction to the database
    const savedTransaction = await newTransaction.save();

    // Respond with the saved transaction
    res.status(201).json(savedTransaction);
  } catch (error) {
    // If an error occurs, respond with a 500 status code and an error message
    res.status(500).json({ error: "Server Error" });
  }
};

// @desc   Delete a transaction
// @route  DELETE /api/v1/transactions/:id
// @access public
module.exports.deleteTransaction = async (req, res, next) => {
  try {
    const transactionId = req.params.id;
    // Check if the transaction exists
    const transaction = await Transaction.findById(transactionId);
    if (!transaction) {
      return res.status(404).json({ error: "Transaction not found" });
    }

    // Delete the transaction from the database
    await Transaction.findByIdAndDelete(transactionId);

    res.json({ message: "Transaction deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};
