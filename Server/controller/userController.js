const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

// Controller function to register a new user
exports.registerUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json({
      success: true,
      message: "Registration successful",
      user: savedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Registration failed",
      message: error.message,
    });
  }
};

// Controller function to log in a user
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "user not found" });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, "your-secret-key", {
      expiresIn: "24h",
    });

    res.json({ success: true, message: "Login successful", token }); // Send a success message
  } catch (error) {
    res.status(500).json({ error: "Login failed", message: error.message });
  }
};

// Controller function to update a user's profile
exports.updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Update failed", message: error.message });
  }
};

// Controller function to delete a user
exports.deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(deletedUser);
  } catch (error) {
    res.status(500).json({ error: "Deletion failed", message: error.message });
  }
};
