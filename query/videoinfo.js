const mongoose = require("mongoose");

const { Schema } = mongoose;
const videoinfoSchema = new Schema({
  videoId: {
    type: Number,
    required: true,
    unique: true,
  },
  categoryId: {
    type: Number,
    required: true,
  },
  videoTitle: {
    type: String,
    required: true,
    unique: true,
  },
  videoLink: {
    type: String,
    required: true,
    unique: true,
  },
  thumbnail: {
    type: Image,
  },
  subtitle: {
    type: String,
  },
  character: {
    type: [String],
  },
  keyword: {
    type: [String],
  },
  view: {
    type: Number,
    required: true,
  },
  videoLike: {
    type: Number,
    required: true,
  },
  shareUrl: {
    type: String,
  },
});

module.exports = mongoose.model("Videoinfo", videoinfoSchema);
