const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/z_energy")
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => {
    console.log("Connection Error");
    console.log(err);
  });

module.exports = mongoose;
