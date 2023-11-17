const express = require("express");
const bodyParser = require("body-parser");
const appPort = 9500;
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");
const app = express();

//middleware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());
app.options("*", cors()); // Handle preflight requests
app.use(cors());

mongoose.connect(
  "mongodb+srv://premierpain:Web786786@hassancluster0.q7vodwk.mongodb.net/KhubaibAliDb?retryWrites=true&w=majority"
);

const db = mongoose.connection;
db.on("connected", () => {
  console.log("db connected");
});
db.on("disconnected", (err, res) => {
  console.log("db disconnected", err, "###", res);
});

//All Routes
app.use("/", routes);

// Server
app.listen(appPort, () => {
  console.log(`Server running at http://localhost/:${appPort}/`);
});
