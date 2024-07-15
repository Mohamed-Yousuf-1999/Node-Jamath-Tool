const User = require("../models/userModel");

exports.getAllUsers = async () => {
  return await User.find();
};

exports.createUser = async (userData) => {
  const user = new User(userData);
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
