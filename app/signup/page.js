"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import "./page.css"
const Signup = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      alert('Please fill out all fields');
      return;
    }

    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (response.ok) {
      router.push('/login');
    } else {
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <div className="sidebar">
        <h1>Join Us!</h1>
        <p>Sign up to access your dashboard and explore more features</p>
      </div>
      <div className="form-container">
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignup}>Sign Up</button>
      </div>
    </div>
  );
};

export default Signup;