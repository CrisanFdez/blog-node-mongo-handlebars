const { Router } = require("express");
const router = Router();

const { create, getPosts, getPost } = require("../controllers/post");
const postValidated = require("../middlewares/post");

router.get("/", getPosts);

router.get("/post/new", (req, res) => {
  res.render("create", {
    title: "New Post",
  });
});

router.post("/post/new", postValidated, create);

router.get("/post/:id", getPost);

module.exports = router;
