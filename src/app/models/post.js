const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    title: { type: String },
    description: { type: String },
    content: { type: String },
    username: { type: String },
  },
  { timestamps: true }
);

module.exports = model("post", schema);
