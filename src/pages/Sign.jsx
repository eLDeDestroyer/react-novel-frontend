import axios from 'axios';
import React, { useState } from 'react';
const apiUrl = import.meta.env.VITE_API_URL;

const SignInSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
    setFormData({ name: '', username: '', password: '' });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (isSignUp) {
        try {
          const res = await axios.post(`${apiUrl}/api/signup`, formData);
            window.location.reload()
          } catch (err) {
            console.error("Gagal membuat akun:", err);
            alert("Gagal menambahkan akun");
          }
    } else {
        try {
          const res = await axios.post(`${apiUrl}/api/signin`, {
            username: formData.username,
            password: formData.password
          });
            localStorage.setItem("token", res.data.data.token)
            window.location.reload()
          } catch (err) {
            console.error("Gagal membuat akun:", err);
            alert("Gagal menambahkan akun");
          }
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-black text-white min-h-screen">
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-zinc-900 p-6 rounded-md w-full max-w-md shadow-md text-white">
        <h2 className="text-2xl font-bold mb-2 text-white">
          {isSignUp ? 'Create an account' : 'Welcome!'}
        </h2>
        <p className="mb-6 text-sm text-gray-400">
          {isSignUp ? 'Sign up to get started.' : 'Sign in to continue.'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-zinc-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="John Doe"
                required
              />
            </div>
          )}
          <div>
            <label className="block text-sm mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-zinc-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="johndoe@email.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-zinc-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="********"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            {isSignUp ? 'Sign Up' : 'Log in'}
          </button>
        </form>

        <div className="mt-4 text-sm text-center text-gray-400">
          {isSignUp ? (
            <>
              Already have an account?{' '}
              <button onClick={handleToggle} className="text-blue-500 hover:underline">
                Sign in
              </button>
            </>
          ) : (
            <>
              Don’t have an account?{' '}
              <button onClick={handleToggle} className="text-blue-500 hover:underline">
                Sign up
              </button>
            </>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default SignInSignUp;
