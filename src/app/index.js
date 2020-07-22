const express = require("express");
const exphbs = require("express-handlebars");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const app = express();

//Settings
const hbs = exphbs.create({
  defaultLayout: "index",
  layoutsDir: path.join(__dirname, "views", "layouts"),
  partialsDir: path.join(__dirname, "views", "partials"),
  extname: ".hbs",
});

app.set("views", path.join(__dirname, "views"));
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");

//Middlewares
const storage = multer.diskStorage({
  destination: path.join(__dirname, "public/img"),
  filename: (req, file, cb) => {
    cb(null, uuidv4() + path.extname(file.originalname));
  },
});

app.use(
  multer({
    storage,
  }).single("image")
);

//Routes
app.use(require("./routes"));

//Static Files
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
