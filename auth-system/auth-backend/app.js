const express = require('express');
const dotenv = require('dotenv');
const passport = require('passport');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use(passport.initialize());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
