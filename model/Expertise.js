const mongoose = require("mongoose");

const expertiseSchema = mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);
const Expertise = mongoose.model("Expertise", expertiseSchema);
module.exports = Expertise;
