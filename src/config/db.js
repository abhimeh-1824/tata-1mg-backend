

const mongoose = require("mongoose");
module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://abhishke159:mehra951@cluster0.n2x8iir.mongodb.net/?retryWrites=true&w=majority"
  );
};