const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    content: { type: String },
    title: { type: String },
    tags: { type: Array },
    summary: { type: String },
    images: { type: String },
  },
  { timestamps: true }
);
const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
