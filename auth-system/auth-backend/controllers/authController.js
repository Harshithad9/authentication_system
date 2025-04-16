const User = require('../models/User');
const bcrypt = require('bcrypt');
const { generateToken } = require('../config/jwt');

// Sign Up (Email/Password)
exports.signup = async (req, res) => {
  const { email, password, name } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = new User({ email, password: hashedPassword, name });
  await user.save();

  const token = generateToken(user);
  res.status(201).json({ token });
};

// Login (Email/Password)
exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const token = generateToken(user);
  res.json({ token });
};
