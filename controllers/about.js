const About = require("../model/About");
const mongodb = require("mongodb");


const createAbout = async (req, res) => {
  const { title, paragraph1, paragraph2, imgUrl, cvUrl, address, phone, mail } =
    req.body;

  try {
    const data = await About.create({
      title,
      paragraph1,
      paragraph2,
      imgUrl,
      cvUrl,
      address,
      phone,
      mail,
    });

    res.status(200).json({
      data: data,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const getAbout = async (req, res) => {
  try {
    const data = await About.find();

    res.status(200).json({
      data,
    });
  } catch (err) {
    res.status(500).json({ err: err });
  }
};

const updateAbout = async (req, res) => {
  try {
    let id = req.params.aboutId;

    let about = await About.updateOne(
      { _id: id },
      {
        $set: {
          title: req.body.title,
          paragraph1: req.body.paragraph1,
          paragraph2: req.body.paragraph2,
          imgUrl: req.body.imgUrl,
          cvUrl: req.body.cvUrl,
          address: req.body.address,
          phone: req.body.phone,
          mail: req.body.mail,
        },
      }
    );

    res.status(200).json({ mesasge: "About updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteAbout = async (req, res) => {
  try {
    let deleted = await About.deleteOne({
      _id: new mongodb.ObjectId(req.params.aboutId),
    });
    res
      .status(200)
      .json({ data: deleted, mesasge: "About deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createAbout, getAbout, updateAbout, deleteAbout };
