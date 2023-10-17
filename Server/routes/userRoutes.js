const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// Register a new user
router.post('/register', userController.registerUser);

// Log in a user
router.post('/login', userController.loginUser);

// Update a user's profile
router.put('/:userId', userController.updateUser);

// Delete a user
router.delete('/:userId', userController.deleteUser);

module.exports = router;
