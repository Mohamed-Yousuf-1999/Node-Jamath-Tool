const UserService = require("../services/userService");

//GET: Users
//Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await UserService.getAllUsers();
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
    const isCreated = await UserService.createUser(req.body);
    if (isCreated) {
      res.status(201).json("User Created");
    } else {
      res.status(400).json("Failed to create user");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET: Users/:id
//Get User By Id
exports.getUserById = async (req, res) => {
  try {
    const isUserExists = await UserService.verifyUserExists(req.params.id);
    if (!isUserExists) {
      return res.status(404).json({ message: "User not found" });
    }
    const user = await UserService.getUserById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PUT: Users/:id
// Update User By Id
exports.updateUserById = async (req, res) => {
  try {
    const isUserExists = await UserService.verifyUserExists(req.params.id);
    if (!isUserExists) {
      return res.status(404).json({ message: "User not found" });
    }
    const isUpdated = await UserService.updateUserById(req.params.id, req.body);
    if (isUpdated) {
      res.status(200).json("User updated");
    } else {
      res.status(400).json("Failed to update user");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//DELETE: Users/:id
// Delete user by Id
exports.deleteUserById = async (req, res) => {
  try {
    const isUserExists = await UserService.verifyUserExists(req.params.id);
    if (!isUserExists) {
      return res.status(404).json({ message: "User not found" });
    }
    const isDeleted = await UserService.deleteUserById(req.params.id);
    console.log(isDeleted);
    if (isDeleted) {
      res.status(200).json("User deleted");
    } else {
      res.status(400).json("Failed to delete user");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
