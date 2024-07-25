const donationRepository = require("../repositories/donationRepository");

exports.getDonations = async (year) => {
  const donations = await donationRepository.getDonations(year);
  const result = donations.map((donation) => {
    return {
      donationId: donation._id,
      donator: donation.donator,
      amount: donation.amount,
      date: donation.createdAt.toISOString().split("T")[0],
    };
  });
  return result;
};

exports.createDonation = async (donationData) => {
  const donation = await donationRepository.createDonation(donationData);
  return donation ? true : false;
};

exports.updateDonation = async (donationId, donationData) => {
    console.log(donationData)
  const donation = await donationRepository.updateDonation(
    donationId,
    donationData
  );
  return donation ? true : false;
};

exports.deleteDonation = async (donationId) => {
  const donation = await donationRepository.deleteDonation(donationId);
  return donation ? true : false;
};

exports.verifyDonationExists = async (donationId) => {
  const isExist = await donationRepository.verifyDonationExists(donationId);
  return isExist ? true : false;
};
