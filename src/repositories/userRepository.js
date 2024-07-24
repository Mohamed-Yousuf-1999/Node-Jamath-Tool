const User = require("../models/userModel");

exports.getAllUsers = async () => {
  return await User.find().sort({ name: 1 });
};

exports.createUser = async (userData) => {
  const user = new User({
    name: userData.name,
    fatherId: userData.fatherId,
    fatherName: userData.fatherName,
    dob: userData.dob,
    contact: userData.contact,
    address: userData.address,
    subscriptions: [
      {
        amount: 100,
      },
    ],
  });
  return await user.save();
};

exports.getUserById = async (userId) => {
  return await User.findById(userId);
};

exports.updateUserById = async (userId, userData) => {
  return await User.findByIdAndUpdate(userId, userData, { new: true });
};

exports.deleteUserById = async (userId) => {
  return await User.findByIdAndDelete(userId);
};

exports.verifyUserExists = async (userId) => {
  const existingUser = await User.findById(userId);
  if (existingUser) {
    return true;
  }
  return false;
};
