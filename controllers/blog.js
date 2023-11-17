const Blog = require("../model/Blog");
const mongodb = require("mongodb");

const createBlog = async (req, res) => {
  try {
    let result = await Blog.create({
      content: req.body.content,
      title: req.body.title,
      tags: req.body.tags,
      summary: req.body.slug,
      images: req.body.images,
    });
    res
      .status(200)
      .json({ data: result, mesasge: "Blog is created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateBlog = async (req, res) => {
  try {
    let id = req.params.blogId;

    let blog = await Blog.updateOne(
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

    res.status(200).json({ mesasge: "Blog updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBlog = async (req, res) => {
  try {
    let deleted = await Blog.deleteOne({
      _id: new mongodb.ObjectId(req.params.blogId),
    });
    res
      .status(200)
      .json({ data: deleted, mesasge: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    let data = await Blog.find().sort({ createdAt: -1 });
    if (data) {
      res.status(200).json({ data });
    } else {
      res.status(404).json({ err: "No blogs found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "getting some error" });
  }
};

const getBlogBySlug = async (req, res) => {
  try {
    let slugs = "/" + req.params.category + "/" + req.params.slug + "/";
    const blog = await Blog.findOne({
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
  createBlog,
  updateBlog,
  deleteBlog,
  getAllBlogs,
  getBlogBySlug,
};
