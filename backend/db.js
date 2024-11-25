const mongoose = require("mongoose");
const mongoURI =
  "mongodb://adminUser:adminPassword@localhost:27017/inotebookdb?authSource=admin";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to Mongo Successfully");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
};

module.exports = connectToMongo;
