const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    fatherName: {
      type: String,
      required: true,
    },

    contact: {
      type: Number,
      required: true,
    },

    address: {
      type: String,
      required: false,
    },

    place: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
