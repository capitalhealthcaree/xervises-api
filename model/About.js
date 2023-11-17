const mongoose = require("mongoose");

const aboutSchema = mongoose.Schema(
  {
    title: { type: String },
    paragraph1: { type: String },
    paragraph2: { type: String },
    imgUrl: { type: String },
    cvUrl: { type: String },
    address: { type: String },
    phone: { type: String },
    mail: { type: String },
  },
  { timestamps: true }
);
const About = mongoose.model("About", aboutSchema);
module.exports = About;
