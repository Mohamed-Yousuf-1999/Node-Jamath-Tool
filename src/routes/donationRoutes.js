const express = require("express");
const donationController = require("../controllers/donationController");

const router = express.Router();
router.get("/:id", donationController.getDonations);
router.post("/", donationController.createDonation);
router.put("/:id", donationController.updateDonation);
router.delete("/:id", donationController.deleteDonation);

module.exports = router;
