const mongoose = require("mongoose");

const TestmonialSchema = mongoose.Schema(
  {
    content: { type: String },
    title: { type: String },
    images: { type: String },
  },
  { timestamps: true }
);
const Testmonial = mongoose.model("Testmonial", TestmonialSchema);
module.exports = Testmonial;
