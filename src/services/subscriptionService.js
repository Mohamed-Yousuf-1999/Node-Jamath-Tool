const SubscriptionRepository = require("../repositories/subscriptionRepository");

exports.getSubscriptions = async () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const subscriptions = await SubscriptionRepository.getSubscriptions();
  const result = subscriptions.map((subscription) => {
    return {
      subscriptionId: subscription._id,
      subscriptionPeriod:
        monthNames[subscription.month - 1] + ` ${subscription.year}`,
      amount: subscription.amount,
      isActive: subscription.isActive,
    };
  });
  return result;
};

exports.createSubscription = async (subscriptionData) => {
  const subscription = await SubscriptionRepository.createSubscription(
    subscriptionData
  );
  return subscription ? true : false;
};

exports.verifySubscriptionExists = async (subscriptionId) => {
  return await SubscriptionRepository.verifySubscriptionExists(subscriptionId);
};

exports.updateSubscription = async (subscriptionId, subscriptionData) => {
  const subscription = await SubscriptionRepository.updateSubscription(
    subscriptionId,
    subscriptionData
  );
  return subscription ? true : false;
};

exports.deleteSubscription = async (subscriptionId) => {
  return await SubscriptionRepository.deleteSubscription(subscriptionId);
};

exports.verifyActiveSubscription = async (subscriptionId) => {
  const subscription = await SubscriptionRepository.verifySubscriptionActive(
    subscriptionId
  );
  return subscription.isActive ? true : false;
};
