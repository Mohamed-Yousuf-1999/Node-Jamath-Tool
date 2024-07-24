const mongoose = require("mongoose");
const subscriptionManagementSchema = new mongoose.Schema(
  {
    year: {
      type: Number,
      required: true,
    },

    month: {
      type: Number,
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Subscription = mongoose.model("User", subscriptionManagementSchema);
module.exports = Subscription;
