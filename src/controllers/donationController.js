const donationService = require("../services/donationService");

//GET: Donations
//Get all donations
exports.getDonations = async (req, res) => {
  try {
    const donations = await donationService.getDonations(req.params.id);
    if (donations.length === 0) {
      return res.status(204).send();
    }
    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//POST: Donation
//Create donation
exports.createDonation = async (req, res) => {
  try {
    const isCreated = await donationService.createDonation(req.body);
    isCreated
      ? res.status(201).send({ message: "Donation added" })
      : res.status(400).send({ message: "Failed create donation" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//PUT: Donation/id
//Update donation
exports.updateDonation = async (req, res) => {
  try {
    const isExist = await donationService.verifyDonationExists(req.params.id);
    if (!isExist) {
      return res.status(404).json({ message: "Donation not found" });
    }
    const isUpdated = await donationService.updateDonation(
      req.params.id,
      req.body
    );
    isUpdated
      ? res.status(200).json({ message: "Donation updated" })
      : res.status(400).json({ message: "Failed to update donation" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//DELETE: Donation/id
//Delete donation
exports.deleteDonation = async (req, res) => {
  try {
    const isDonationExists = await donationService.deleteDonation(
      req.params.id
    );
    if (!isDonationExists) {
      return res.status(404).json({ message: "Donation not found" });
    }
    const isDeleted = await donationService.deleteDonation(req.params.id);
    isDeleted
      ? res.status(200).json({ message: "Donation deleted" })
      : res.status(400).json({ message: "Failed to delete donation" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
