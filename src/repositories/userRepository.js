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
    contact: 1234567890,
    address: userData.address,
    subscriptions: [
      {
        amount: 100,
      },
    ],
  });
  return await user.save();
};

exports.getUserById = async (id) => {
  return await User.findById(id);
};

exports.updateUserById = async (id, userData) => {
  return await User.findByIdAndUpdate(id, userData, { new: true });
};

exports.deleteUserById = async (id) => {
  return await User.findByIdAndDelete(id);
};
