const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username cannot be empty"],
  },
  email: {
    type: String,
    required: [true, "Email cannot be empty"],
  },
  password: {
    type: String,
    required: [true, "Password cannot be empty"],
  },
});

const user = mongoose.model("User", userSchema);

module.exports = user;
