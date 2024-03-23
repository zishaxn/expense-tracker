const mongoose = require("mongoose");

const transactionsSchema = new mongoose.Schema({
  text: {
    type: String,

    required: true,
  },
  amount: {
    type: Number,

    required: true,
  },
});

module.exports = mongoose.model("transactions", transactionsSchema);
