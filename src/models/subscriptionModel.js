const mongoose = require("mongoose");
const subscriptionSchema = new mongoose.Schema(
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

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Subscription = mongoose.model("Subscription", subscriptionSchema);
module.exports = Subscription;
