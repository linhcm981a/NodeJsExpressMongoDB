const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const authorRoute = require("./src/routes/routes");
const bookRook = require("./src/routes/routes");
const authUser = require("./src/routes/routes");
dotenv.config();
///CONNECT DATABASE
mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("Connect to MongoDb");
});

app.use(express.json());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

///ROUTES
app.use("/v1/author", authorRoute);
app.use("/v1/book", bookRook);
app.use("/v1", authUser);
app.listen(8000, () => {
  console.log("Server is running...");
});
