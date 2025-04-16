# authentication_system

# 🔐 User Authentication Module

A simple and secure Node.js authentication system with social login support.

## 🚀 Features
- Email/Password Login
- Google, Facebook & Apple OAuth2 Login
- JWT Token-based Auth
- MongoDB Integration

## 🔧 Tech Stack
Node.js · Express · MongoDB · Passport.js · JWT

## 📦 Setup

1. Clone & install dependencies:
   ```bash
   git clone https://github.com/Harshithad9/authentication_system.git
   cd auth-module
   npm install
   ```

2. Create `.env` file with:
   ```env
   MONGO_URI=your-mongo-uri
   JWT_SECRET=your-secret
   GOOGLE_CLIENT_ID=...
   GOOGLE_CLIENT_SECRET=...
   ...
   ```

3. Start the server:
   ```bash
   npm run dev
   ```

## 🌐 Routes
- `/api/auth/signup`
- `/api/auth/login`
- `/api/auth/google`
- `/api/auth/facebook`
- `/api/auth/apple`

## ✅ Done!
You're now ready with a secure auth system! 🎉
