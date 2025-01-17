const SubscriptionService = require("../services/subscriptionService");

//GET: Subscriptions
//Get all the subscrptions
exports.getSubscriptions = async (req, res) => {
  try {
    const subscriptions = await SubscriptionService.getSubscriptions();
    if (subscriptions.length === 0) {
      return res.status(204).send();
    }
    res.status(200).json(subscriptions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//CREATE: Subscriptions
//Create subscription
exports.createSubscription = async (req, res) => {
  try {
    const isCreated = await SubscriptionService.createSubscription(req.body);
    if (isCreated) {
      res.status(201).json({ message: "Subscription Created" });
    } else {
      res.status(400).json({ message: "Failed to create subscription" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//PUT: Subscriptions
//Update subscription by SubscriptionId
exports.updateSubscription = async (req, res) => {
  try {
    const isExist = await SubscriptionService.verifySubscriptionExists(
      req.params.id
    );
    if (!isExist) {
      return res.status(404).json({ message: "Subscription not found" });
    }
    const isActive = await SubscriptionService.verifyActiveSubscription(
      req.params.id
    );
    if (!isActive) {
      return res
        .status(400)
        .json({ message: "Could not update inactive subscription" });
    }
    const isUpdated = await SubscriptionService.updateSubscription(
      req.params.id,
      req.body
    );
    if (isUpdated) {
      res.status(200).json({ message: "Subscription updated" });
    } else {
      res.status(400).json({ message: "Failed to update subscription" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//DELETE: Subscriptions/:id
//Delete subscription by Id
exports.deleteSubscription = async (req, res) => {
  try {
    const isSubscriptionExists =
      await SubscriptionService.verifySubscriptionExists(req.params.id);
    if (!isSubscriptionExists) {
      return res.status(404).json({ message: "Subscription not found" });
    }
    const isDeleted = await SubscriptionService.deleteSubscription(
      req.params.id
    );
    if (isDeleted) {
      res.status(200).json({ message: "Subscription deleted" });
    } else {
      res.status(400).json({ message: "Failed to delete subscription" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
