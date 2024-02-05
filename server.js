const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDb = require("./config/connectDB");
const path = require("path");

// config dotenv file
dotenv.config();

// database call
connectDb();
const app = express();
// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
// user routes
app.use("/api/v1/users", require("./routes/userRoute"));

//static files
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
//transaction routes
app.use("/api/v1/transactions", require("./routes/transactionRoutes"));

// port
const PORT = 8080 || process.env.PORT;

// listen
app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
