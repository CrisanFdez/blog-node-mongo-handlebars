const { connection, connect } = require("mongoose");
const { mongoURI } = require("../config");

const checkConnection = () => {
  return connection.readyState;
};

const connecting = async () => {
  try {
    if (!checkConnection()) {
      console.log("Connecting to Mongodb...");
      await connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }
    console.log("Mongodb is connected to", connection.host);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { checkConnection, connecting };
