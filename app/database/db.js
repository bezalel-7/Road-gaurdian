const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb+srv://shiva1566:8688921162@cluster0.r7lg0ih.mongodb.net/shivabro", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => console.log("Connected to the database!"))
  .on("error", (err) => console.log("Error with the database!", err));
