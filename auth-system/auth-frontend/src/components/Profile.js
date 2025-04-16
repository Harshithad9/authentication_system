import React, { useEffect, useState } from 'react';
import API from '../api';

const Profile = () => {
  const [user, setUser] = useState(null);

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  useEffect(() => {
    API.get('/api/auth/profile')
      .then((res) => setUser(res.data.user))
      .catch(() => logout());
  }, []);

  return user ? (
    <div>
      <h2>Welcome, {user.name}</h2>
      <p>Email: {user.email}</p>
      {user.picture && <img src={user.picture} alt="Profile" width="100" />}
      <br />
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default Profile;
