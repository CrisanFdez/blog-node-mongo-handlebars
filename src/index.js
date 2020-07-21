require("dotenv").config();
const { validateReqEnvs } = require("./utils");
const reqEnvs = ["PORT", "HOST"];
validateReqEnvs(reqEnvs);

//Mongoose
const { checkConnection, connecting } = require("./db");
(async () => {
  await connecting();
  console.log("connection status:", checkConnection());

  //Server
  require("./server");
})();
