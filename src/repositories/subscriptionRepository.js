const Subscription = require("../models/subscriptionModel");

exports.getSubscriptions = async () => {
  return await Subscription.find().sort({ year: -1, month: -1 });
};

exports.createSubscription = async (subscriptionData) => {
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

exports.verifySubscriptionExists = async (subscriptionId) => {
  return await Subscription.findById(subscriptionId);
};
