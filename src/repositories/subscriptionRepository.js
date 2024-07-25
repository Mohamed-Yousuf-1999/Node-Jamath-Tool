const Subscription = require("../models/subscriptionModel");

exports.getSubscriptions = async () => {
  return await Subscription.find().sort({ year: -1, month: -1 });
};

exports.createSubscription = async (subscriptionData) => {
  const latestSubscription = await Subscription.findOne().sort({
    createdAt: -1,
  });

  if (latestSubscription) {
    latestSubscription.isActive = false;
    await latestSubscription.save();
  }
  const subscription = new Subscription(subscriptionData);
  return await subscription.save();
};

exports.updateSubscription = async (subscriptionId, subscriptionData) => {
  return await Subscription.findByIdAndUpdate(
    subscriptionId,
    subscriptionData,
    { new: true }
  );
};

exports.deleteSubscription = async (subscriptionId) => {
  return await Subscription.findByIdAndDelete(subscriptionId);
};

const subscriptionById = async (subscriptionId) => {
  const subscription = await Subscription.findById(subscriptionId);
  return subscription;
};

exports.verifySubscriptionExists = async (subscriptionId) => {
  return await subscriptionById(subscriptionId);
};

exports.verifySubscriptionActive = async (subscriptionId) => {
  return await subscriptionById(subscriptionId);
};
