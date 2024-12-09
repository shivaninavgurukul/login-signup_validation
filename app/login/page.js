
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import "./page.css";
const Login = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      alert('Please fill out all fields');
      return;
    }

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (response.ok) {
      router.push('/dashboard');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <div className="sidebar">
        <h1>Welcome Back!</h1>
        <p>Login to access your dashboard</p>
      </div>
      <div className="form-container">
        <h2>Login</h2>
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
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;