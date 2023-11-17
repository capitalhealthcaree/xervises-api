const Expertise = require("../model/Expertise");

const createExpertise = async (req, res) => {
  const { title, description } = req.body;

  try {
    const data = await Expertise.create({
      title,
      description,
    });

    res.status(200).json({
      data: data,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const getExpertise = async (req, res) => {
  try {
    const data = await Expertise.find();
    if (data) {
      res.status(200).json({ data });
    } else {
      res.status(404).json({ err: "No Expertise found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "getting some error" });
  }
};

module.exports = { createExpertise, getExpertise };
