const Books = require("../model/Books");
const mongodb = require("mongodb");

const createBook = async (req, res) => {
  try {
    let result = await Books.create({
      content: req.body.content,
      title: req.body.title,
      images: req.body.images,
    });
    res.status(200).json({
      data: result,
      mesasge: "Book is created successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateBook = async (req, res) => {
  try {
    let id = req.params.blogId;

    let blog = await Books.updateOne(
      { _id: id },
      {
        $set: {
          content: req.body.content,
          title: req.body.title,
        },
      }
    );

    res.status(200).json({ mesasge: "Book updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    let deleted = await Books.deleteOne({
      _id: new mongodb.ObjectId(req.params.blogId),
    });
    res
      .status(200)
      .json({ data: deleted, mesasge: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllBooks = async (req, res) => {
  try {
    let data = await Books.find().sort({ createdAt: -1 });
    if (data) {
      res.status(200).json({ data });
    } else {
      res.status(404).json({ err: "No Book found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "getting some error" });
  }
};

module.exports = {
  createBook,
  updateBook,
  deleteBook,
  getAllBooks,
};
