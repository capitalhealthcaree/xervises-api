const mongoose = require("mongoose");

const ScholarlyWorkSchema = mongoose.Schema(
  {
    content: { type: String },
    title: { type: String },
    tags: { type: Array },
    summary: { type: String },
    images: { type: String },
  },
  { timestamps: true }
);
const ScholarlyWork = mongoose.model("ScholarlyWork", ScholarlyWorkSchema);
module.exports = ScholarlyWork;
