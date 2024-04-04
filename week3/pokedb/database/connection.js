const mongoose = require("mongoose");

// Insert your connection string inside this variable
const connectionString = 'mongodb+srv://admin:yCFHUcAemNXcS2bL@cluster0.yq93sfq.mongodb.net/pokeDB';

mongoose.set("strictQuery", true); // Remove Mongoose warning in console

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Database connected"))
  .catch(error => console.error(error));


module.exports = connectionString; // Do not edit/remove this line