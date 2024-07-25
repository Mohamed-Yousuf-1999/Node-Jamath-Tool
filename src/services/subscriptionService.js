const SubscriptionRepository = require("../repositories/subscriptionRepository");

exports.getSubscriptions = async () => {
  const subscriptions = await SubscriptionRepository.getSubscriptions();
  const result = subscriptions.map((subscription) => {
    return {
      subscriptionId: subscription._id,
      year: subscritpion.year,
      month: subscription.month,
      amount: subscription.amount,
    };
  });
  return result;
};

exports.createSubscription = async (subscriptionData) => {
  const subscription = await SubscriptionRepository.createSubscription(subscriptionData);
  return subscription ? true : false;
}

exports.verfiyUserExists = async (subscriptionId) => {
  return await SubscriptionRepository.verifySubscriptionExists(subscriptionId);
};

exports.updateSubscription = async (subscriptionId) => {
  const subscription = await SubscriptionRepository.updateSubscription(
    subscriptionId
  );
  return subscription ? true : false;
};

exports.deleteSubscription = async (subscriptionId) => {
  return await SubscriptionRepository.deleteSubscription(subscriptionId);
};
