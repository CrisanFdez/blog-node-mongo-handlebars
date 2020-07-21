const express = require("express");
const { port, host } = require("./config");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require("./app"));

app.listen(port, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
