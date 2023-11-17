const ScholarlyWork = require("../model/ScholarlyWork");
const mongodb = require("mongodb");

const createWork = async (req, res) => {
  try {
    let result = await ScholarlyWork.create({
      content: req.body.content,
      title: req.body.title,
      tags: req.body.tags,
      summary: req.body.summary,
      images: req.body.images,
    });
    res
      .status(200)
      .json({
        data: result,
        mesasge: "Scholarly Work is created successfully",
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateWork = async (req, res) => {
  try {
    let id = req.params.blogId;

    let blog = await ScholarlyWork.updateOne(
      { _id: id },
      {
        $set: {
          content: req.body.content,
          title: req.body.title,
          tags: req.body.tags,
          summary: req.body.slug,
        },
      }
    );

    res.status(200).json({ mesasge: "Scholarly Work updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteWork = async (req, res) => {
  try {
    let deleted = await ScholarlyWork.deleteOne({
      _id: new mongodb.ObjectId(req.params.blogId),
    });
    res
      .status(200)
      .json({ data: deleted, mesasge: "Scholarly Work deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllWorks = async (req, res) => {
  try {
    let data = await ScholarlyWork.find().sort({ createdAt: -1 });
    if (data) {
      res.status(200).json({ data });
    } else {
      res.status(404).json({ err: "No Scholarly Work found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "getting some error" });
  }
};

const getWorkBySlug = async (req, res) => {
  try {
    let slugs = "/" + req.params.category + "/" + req.params.slug + "/";
    const blog = await ScholarlyWork.findOne({
      category: req.params.category,
      slug: slugs,
    });
    if (!blog) {
      return res.status(404).json({ error: "Blogs not found" });
    }
    res.status(200).json({ data: blog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createWork,
  updateWork,
  deleteWork,
  getAllWorks,
  getWorkBySlug,
};
