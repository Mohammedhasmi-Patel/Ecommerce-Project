const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv").config();

// here we will write database connection related logic.

mongoose
  .connect("mongodb://localhost:27017/Ecommerce")
  .then(() => console.log("connection sucess"))
  .catch((error) => console.log(`connection error ${error}`));

const app = express();

const PORT = process.env.PORT || 4000;

// this is middlewares
app.use(
  cors({
    origin: "http://localhost:5173/",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`server listening at port ${PORT}`);
});
