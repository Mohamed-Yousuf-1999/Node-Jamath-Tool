const UserRepository = require("../repositories/userRepository");

//To calculate age using dob
const calculateAge = (dob) => {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
};

// Get all users
exports.getAllUsers = async () => {
  const users = await UserRepository.getAllUsers();

  const allUsers = users.map((user) => {
    const age = calculateAge(user.dob);

    let pendingAmount = 0;
    let totalAmount = 0;
    user.subscriptions.map((subs) => {
      if (!subs.isPaid) {
        pendingAmount += subs.amount;
      }
      totalAmount += subs.amount;
    });

    return {
      userId: user._id,
      name: user.name,
      age: age,
      fatherName: user.fatherName,
      pendingAmount: pendingAmount,
      totalAmount: totalAmount,
    };
  });

  return allUsers;
};

// Create user
exports.createUser = async (userData) => {
  const user = await UserRepository.createUser(userData);
  return user ? true : false;
};

// Verify User
exports.verifyUserExists = async (userId) => {
  return await UserRepository.verifyUserExists(userId);
};

// Get user by Id
exports.getUserById = async (userId) => {
  const user = await UserRepository.getUserById(userId);
  const userDetail = {
    userId: user._id,
    name: user.name,
    fatherName: user.fatherName,
    address: user.address,
    age: calculateAge(user.dob),
    dob: user.dob,
    contact: user.contact,
    isAlive: user.isAlive,
    isMarried: user.isMarried,
  };

  let pendingAmount = 0;
  let totalAmount = 0;

  const currentDate = new Date();
  const startDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() - 12,
    1
  );
  const endDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );

  const subscriptions = user.subscriptions
    .filter(
      (subscription) =>
        subscription.dueDate >= startDate && subscription.dueDate <= endDate
    )
    .map((subscription) => {
      if (!subscription.isPaid) {
        pendingAmount += subscription.amount;
      }
      totalAmount += subscription.amount;
      const dueMonth = subscription.dueDate.toLocaleString("default", {
        month: "long",
        year: "numeric",
      });

      return {
        subscriptionId: subscription._id,
        dueMonth: dueMonth,
        amount: subscription.amount,
        isPaid: subscription.isPaid,
      };
    });

  const result = {
    userDetail: userDetail,
    totalAmount: totalAmount,
    pendingAmount: pendingAmount,
    subscriptions: subscriptions,
  };
  return result;
};

// Update User by Id
exports.updateUserById = async (userId, userData) => {
  const user = await UserRepository.updateUserById(userId, userData);
  return user ? true : false;
};

// Delete user by Id
exports.deleteUserById = async (userId) => {
  return await UserRepository.deleteUserById(userId);
};
