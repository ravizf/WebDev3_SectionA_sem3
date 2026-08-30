const userModel = require("../model/userModel");

const getAllUsers = (req, res) => {
  const users = userModel.getAll();
  res.json(users);
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  const user = userModel.getById(id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

const saveUser = (req, res) => {
  const newUser = req.body;
  const savedUser = userModel.save(newUser);
  if (savedUser) {
    res.status(201).json(savedUser);
  } else {
    res.status(500).json({ message: "Error saving user" });
  }
};

const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const updatedData = req.body;

  const updatedUser = userModel.update(id, updatedData);

  if (updatedUser) {
    res.status(200).json(updatedUser);
  } else {
    res.status(404).json({ message: "User not found or update failed" });
  }
};

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  const isDeleted = userModel.remove(id);

  if (isDeleted) {
    res.status(200).json({ message: `User ${id} deleted successfully` });
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  saveUser,
  updateUser,
  deleteUser,
};
