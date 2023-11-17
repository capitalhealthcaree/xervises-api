const express = require("express");
const contact = require("../controllers/contact");
// const about = require("../controllers/about");
// const blog = require("../controllers/blog");
// const expertise = require("../controllers/expertise");
// const scholarlyWork = require("../controllers/scholarlyWork");
// const Books = require("../controllers/books");
// const Certification = require("../controllers/certification");
// const Testmonial = require("../controllers/testmonial");

const router = express.Router();

Welcome
router.get("/", contact.Welcome);

// for Contact Routes
router.post("/createContact", contact.createContact);
router.get("/getContact", contact.getContact);
// for About Routes
// router.post("/createAbout", about.createAbout);
// router.get("/getAbout", about.getAbout);
// router.patch("/updateAbout/:aboutId", about.updateAbout);
// router.delete("/deleteAbout/:aboutId", about.deleteAbout);

// for Blogs Routes
// router.post("/createBlog", blog.createBlog);
// router.patch("/updateBlog/:blogId", blog.updateBlog);
// router.delete("/deleteBlog/:blogId", blog.deleteBlog);
// router.get("/getAllBlogs", blog.getAllBlogs);

// for Expertise Routes
// router.post("/createExpertise", expertise.createExpertise);
// router.get("/getExpertise", expertise.getExpertise);

// for Scholarly Work Routes
// router.post("/createWork", scholarlyWork.createWork);
// router.patch("/updateWork/:blogId", scholarlyWork.updateWork);
// router.delete("/deleteWork/:blogId", scholarlyWork.deleteWork);
// router.get("/getAllWorks", scholarlyWork.getAllWorks);

// for Books Routes
// router.post("/createBook", Books.createBook);
// router.patch("/updateBook/:blogId", Books.updateBook);
// router.delete("/deleteBook/:blogId", Books.deleteBook);
// router.get("/getAllBooks", Books.getAllBooks);

// // for Certification Routes
// router.post("/createCertification", Certification.createCertification);
// router.patch("/updateCertification/:blogId", Certification.updateCertification);
// router.delete(
//   "/deleteCertification/:blogId",
//   Certification.deleteCertification
// );
// router.get("/getAllCertification", Certification.getAllCertification);

// // for Testmonial Routes
// router.post("/createTestmonial", Testmonial.createTestmonial);
// router.patch("/updateTestmonial/:blogId", Testmonial.updateTestmonial);
// router.delete("/deleteTestmonial/:blogId", Testmonial.deleteTestmonial);
// router.get("/getAllTestmonials", Testmonial.getAllTestmonials);

module.exports = router;
