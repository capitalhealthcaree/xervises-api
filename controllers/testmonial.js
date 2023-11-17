const Testmonial = require("../model/Testmonial");
const mongodb = require("mongodb");

const createTestmonial = async (req, res) => {
  try {
    let result = await Testmonial.create({
      content: req.body.content,
      title: req.body.title,
      images: req.body.images,
    });
    res.status(200).json({
      data: result,
      mesasge: "Testmonial is created successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTestmonial = async (req, res) => {
  try {
    let id = req.params.blogId;

    let blog = await Testmonial.updateOne(
      { _id: id },
      {
        $set: {
          content: req.body.content,
          title: req.body.title,
        },
      }
    );

    res.status(200).json({ mesasge: "Testmonial updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTestmonial = async (req, res) => {
  try {
    let deleted = await Testmonial.deleteOne({
      _id: new mongodb.ObjectId(req.params.blogId),
    });
    res
      .status(200)
      .json({ data: deleted, mesasge: "Testmonial deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllTestmonials = async (req, res) => {
  try {
    let data = await Testmonial.find().sort({ createdAt: -1 });
    if (data) {
      res.status(200).json({ data });
    } else {
      res.status(404).json({ err: "No Testmonial found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "getting some error" });
  }
};

module.exports = {
  createTestmonial,
  updateTestmonial,
  deleteTestmonial,
  getAllTestmonials,
};
