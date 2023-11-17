const Contact = require("../model/Contact");

const welcome = async (req, res) => {
  res.send("Welcome to Xervises Apis");
};


const createContact = async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const data = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    res.status(200).json({
      data: data,
      mesasge: "Thank you! Your query is received",
    });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const getContact = async (req, res) => {
  try {
    const data = await Contact.find();
    res.status(200).json({
      data,
    });
  } catch (err) {
    res.status(500).json({ err: err });
  }
};

module.exports = { createContact, getContact ,welcome};
