const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    username: { type: String },
    title: { type: String },
    description: { type: String },
    content: { type: String },
    image: { type: String },
  },
  { timestamps: true }
);

module.exports = model("post", schema);
