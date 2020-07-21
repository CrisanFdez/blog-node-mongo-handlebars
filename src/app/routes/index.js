const { Router } = require("express");
const router = Router();

const { create, getPosts, getPost } = require("../controllers/post");
const postValidated = require("../middlewares/post");

router.get("/", getPosts);

router.get("/about", (req, res) => {
  res.render("about", {
    title: "About Us",
  });
});

router.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact Us",
  });
});

router.get("/post/new", (req, res) => {
  res.render("create", {
    title: "New Post",
  });
});

router.post("/post/new", postValidated, create);

router.get("/post/:id", getPost);

router.get("/signin", (req, res) => {
  res.render("signin", {
    title: "Login",
  });
});

router.get("/register", (req, res) => {
  res.render("register", {
    title: "Join",
  });
});

module.exports = router;
