const mongoose = require("mongoose");
const subscriptionSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
    default: 0,
  },
  isPaid: {
    type: Boolean,
    default: false,
  },
  dueDate: {
    type: Date,
    default: Date.now,
  },
  paidDate: {
    type: Date,
  },
});

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    fatherId: {
      type: String,
      default: "",
    },
    fatherName: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
    },
    isAlive: {
      type: Boolean,
      default: true,
    },
    isMarried: {
      type: Boolean,
      default: false,
    },
    isTerminate: {
      type: Boolean,
      default: false,
    },
    subscriptions: [subscriptionSchema],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
