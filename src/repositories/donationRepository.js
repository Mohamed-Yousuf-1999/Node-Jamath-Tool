const Donation = require("../models/donationModel");

exports.getDonations = async (year) => {
  const startDate = new Date(year, 0, 1);
  const endDate = new Date(year, 11, 31);
  return await Donation.find({
    createdAt: { $gte: startDate, $lt: endDate },
  });
};

exports.createDonation = async (donationData) => {
  const donation = new Donation(donationData);
  return await donation.save();
};

exports.updateDonation = async (donationId, donationData) => {
  return await Donation.findByIdAndUpdate(donationId, donationData, {
    new: true,
  });
};

exports.deleteDonation = async (donationId) => {
  return await Donation.findByIdAndDelete(donationId);
};

exports.verifyDonationExists = async (donationId) => {
  return await Donation.findById(donationId);
};
