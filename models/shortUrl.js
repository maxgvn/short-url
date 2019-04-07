const mongoose = require("mongoose");

const shortURLSchema = new mongoose.Schema({
  originalUrl: String,
  urlCode: String,

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("shortURL", shortURLSchema);
