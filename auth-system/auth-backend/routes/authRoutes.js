const express = require('express');
const router = express.Router();
const passport = require('passport');
const { signup, login } = require('../controllers/authController');

// Email/Password Sign Up & Login
router.post('/signup', signup);
router.post('/login', login);

// Social OAuth (Google, Facebook, Apple)
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/auth/google/callback', passport.authenticate('google', { session: false }), (req, res) => {
  const token = generateToken(req.user);
  res.json({ token });
});

router.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));
router.get('/auth/facebook/callback', passport.authenticate('facebook', { session: false }), (req, res) => {
  const token = generateToken(req.user);
  res.json({ token });
});

router.get('/auth/apple', passport.authenticate('apple'));
router.post('/auth/apple/callback', passport.authenticate('apple', { session: false }), (req, res) => {
  const token = generateToken(req.user);
  res.json({ token });
});

module.exports = router;
