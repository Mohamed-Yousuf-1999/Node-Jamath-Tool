const userService = require("../services/userService");

//GET: Users
//Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    if (users.length === 0) {
      return res.status(204).send();
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//POST: Users
//Create user
exports.createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET: Users/:id
//Get User By Id
exports.getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PUT: Users/:id
// Update User By Id
exports.updateUserById = async (req, res) => {
  try {
    const user = await userService.updateUserById(req.params.id, req.body);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//DELETE: Users/:id
// Delete user by Id
exports.deleteUserById = async (req, res) => {
  try {
    const user = await userService.deleteUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
