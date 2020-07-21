const post = require("../models/post");

module.exports = {
  getPosts: async (req, res) => {
    const posts = await post.find().lean();
    res.render("index", {
      title: "Home",
      posts,
    });
  },
  create: async (req, res) => {
    const { username, title, description, content } = req.body;
    const newPost = new post({ username, title, description, content });
    await newPost.save();
    res.redirect("/");
  },
  getPost: async (req, res) => {
    const postId = await post.findById(req.params.id).lean();
    console.log(postId);
    res.render("post", {
      title: "Post",
      postId,
    });
  },
};
