const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  college: String,
  email: {
    type: String,
    unique: true
  },
  password: String,
  skillsOffered: [],
  skillsWanted: [],
  rating: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model("User", userSchema);