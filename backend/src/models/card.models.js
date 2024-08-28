const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
  // A unique id will be created by MongoDb.

  // title for the Card.
  title: {
    type: String,
    required: true,
  },
  // description for the Card.
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Card", CardSchema);
