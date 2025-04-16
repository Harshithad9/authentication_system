import React from 'react';

const SocialLogin = () => {
  const base = process.env.REACT_APP_API_BASE_URL;
  return (
    <div>
      <h3>Or sign in with:</h3>
      <a href={`${base}/api/auth/google`}><button>Google</button></a>
      <a href={`${base}/api/auth/facebook`}><button>Facebook</button></a>
      <a href={`${base}/api/auth/apple`}><button>Apple</button></a>
    </div>
  );
};

export default SocialLogin;
