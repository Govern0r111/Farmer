import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add authentication logic for email/password
    alert('Login attempted!');
  };

  const handleGoogleLogin = async (credentialResponse) => {
    try {
      const res = await fetch('http://localhost:5173/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ credential: credentialResponse.credential }),
      });
      if (!res.ok) throw new Error('Login failed');
      const data = await res.json();
      // Save user info/token to localStorage
      localStorage.setItem('user', JSON.stringify(data));
      // Redirect to dashboard
      navigate('/dashboard');
    } catch (err) {
      alert('Google login failed: ' + err.message);
    }
  };

  return (
    <GoogleOAuthProvider clientId="925626249365-35rj25g4aepvnsjn29t80ggbt337pf2p.apps.googleusercontent.com">
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <form className="bg-white p-8 rounded shadow-md w-full max-w-sm" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-2 border rounded"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-6 p-2 border rounded"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="w-full py-2 px-4 bg-[#52bd57] text-white rounded font-semibold">Login</button>
          <div className="mt-4 text-center text-sm">
            Don't have an account? <a href="#" className="text-[#52bd57] hover:underline">Sign Up</a>
          </div>
          <div className="mt-6 flex flex-col items-center">
            <GoogleLogin
              onSuccess={handleGoogleLogin}
              onError={() => {
                alert('Google login failed');
              }}
            />
          </div>
        </form>
      </div>
    </GoogleOAuthProvider>
  );
};

export default LoginPage;
