const express = require('express');
const router = express.Router();
const { getUserProfile } = require('../controllers/userController');
const { verifyToken } = require('../config/jwt');

// Get user profile
router.get('/profile', verifyToken, getUserProfile);

module.exports = router;
