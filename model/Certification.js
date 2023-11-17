const mongoose = require("mongoose");

const CertificationSchema = mongoose.Schema(
  {
    content: { type: String },
    title: { type: String },
    images: { type: String },
  },
  { timestamps: true }
);
const Certification = mongoose.model("Certification", CertificationSchema);
module.exports = Certification;
