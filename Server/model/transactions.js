const mongoose = require("mongoose");

const transactionsSchema = new mongoose.Schema({
  text: {
    type: String,
    unique: false,
    required: true,
  },
  amount: {
    type: Number,
    unique: false,
    required: true,
  },
});

module.exports = mongoose.model("transactions", transactionsSchema);
