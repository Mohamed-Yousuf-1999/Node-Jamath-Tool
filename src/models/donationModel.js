const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema(
  {
    donator: {
      type: String,
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

const Donation = mongoose.model("Donations", donationSchema);
module.exports = Donation;
