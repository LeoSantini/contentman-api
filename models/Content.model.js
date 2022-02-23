const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contentSchema = new Schema({
  contentName: { type: String, maxlength: 24, required: true, trim: true },
  img: { type: String },
  contentBody: { type: String, required: true },
});
