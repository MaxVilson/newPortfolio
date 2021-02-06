const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();

let port = process.env.PORT || 7777;

dotenv.config();

mongoose.connect(
  process.env.DATABASE,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to database");
    }
  }
);

// Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static("../client/dist"));

// require apis
const postRoutes = require("./routes/post");
const portfolioRoutes = require("./routes/portfolio");

app.use("/api", postRoutes);
app.use("/api", portfolioRoutes);

app.listen(port, () => {
  console.log(`server is started on ${port}`);
});
