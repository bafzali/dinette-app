const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: { type: String, required: true, unique: true },
  password: { type: Date, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  zipCode: { type: Number, min: 5, max: 5, required: true },
  currentVoteURL: { type: String },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
