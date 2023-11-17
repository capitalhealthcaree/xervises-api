const mongoose = require("mongoose");

const BooksSchema = mongoose.Schema(
  {
    content: { type: String },
    title: { type: String },
    images: { type: String },
  },
  { timestamps: true }
);
const Books = mongoose.model("Books", BooksSchema);
module.exports = Books;
