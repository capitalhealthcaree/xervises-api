const Certification = require("../model/Certification");
const mongodb = require("mongodb");

const createCertification = async (req, res) => {
  try {
    let result = await Certification.create({
      content: req.body.content,
      title: req.body.title,
      images: req.body.images,
    });
    res.status(200).json({
      data: result,
      mesasge: "Certification is created successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCertification = async (req, res) => {
  try {
    let id = req.params.blogId;

    let blog = await Certification.updateOne(
      { _id: id },
      {
        $set: {
          content: req.body.content,
          title: req.body.title,
        },
      }
    );

    res.status(200).json({ mesasge: "Certification updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCertification = async (req, res) => {
  try {
    let deleted = await Certification.deleteOne({
      _id: new mongodb.ObjectId(req.params.blogId),
    });
    res
      .status(200)
      .json({ data: deleted, mesasge: "Certification deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllCertification = async (req, res) => {
  try {
    let data = await Certification.find().sort({ createdAt: -1 });
    if (data) {
      res.status(200).json({ data });
    } else {
      res.status(404).json({ err: "No Certification found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "getting some error" });
  }
};

module.exports = {
  createCertification,
  updateCertification,
  deleteCertification,
  getAllCertification,
};
