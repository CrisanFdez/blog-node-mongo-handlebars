const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const app = express();

const hbs = exphbs.create({
  defaultLayout: "index",
  layoutsDir: path.join(__dirname, "views", "layouts"),
  partialsDir: path.join(__dirname, "views", "partials"),
  extname: ".hbs",
});

app.set("views", path.join(__dirname, "views"));
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");

//Routes
app.use(require("./routes"));

//Static Files
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
