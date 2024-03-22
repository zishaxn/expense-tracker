const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config({ path: "./config/config.env" });
const app = express();
const PORT = process.env.PORT || 5000;

const transactions = require("./routes/transactions");

// Middleware
app.use(cors());
app.use(
  cors({
    origin: ["http://localhost:5173/"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);
app.use(express.json()); // Parse JSON bodies

// Routes
app.use("/api/v1/transactions", transactions);

// mongodb
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection Successful");
  })
  .catch((err) => {
    console.error("DB Connection Error:", err);
    process.exit(1); // Terminate the application on connection failure
  });

// root endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Server is running; you are seeing this on the deployed server",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(
    `Server is Running in ${process.env.Node_ENV} mode on ${PORT}`.yellow.bold
  );
});
